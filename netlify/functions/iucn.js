exports.handler = async function (event) {
  const species = event.queryStringParameters && event.queryStringParameters.species;

  if (!species) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "No species name provided" }),
    };
  }

  const token = process.env.IUCN_TOKEN;

  if (!token) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API token not configured" }),
    };
  }

  const headers = {
    Authorization: token,
    accept: "application/json",
  };

  try {
    // Step 1: Search by common name first
    const commonNameUrl = `https://api.iucnredlist.org/api/v4/taxa/common_name/${encodeURIComponent(species)}`;
    let assessmentId = null;
    let taxonData = null;

    const commonRes = await fetch(commonNameUrl, { headers });

    if (commonRes.ok) {
      const commonData = await commonRes.json();
      // The response contains a list of taxa - find the first with assessments
      const taxa = commonData.taxa || [];
      for (const taxon of taxa) {
        if (taxon.assessments && taxon.assessments.length > 0) {
          // Find the latest assessment
          const latest = taxon.assessments.find(a => a.latest) || taxon.assessments[0];
          assessmentId = latest.assessment_id;
          taxonData = taxon;
          break;
        }
      }
    }

    // Step 2: If common name search didn't work, try scientific name search
    if (!assessmentId) {
      // Try splitting the input as genus + species
      const parts = species.trim().split(/\s+/);
      if (parts.length >= 2) {
        const genus = parts[0];
        const speciesName = parts[1];
        const sciUrl = `https://api.iucnredlist.org/api/v4/taxa/scientific_name?genus_name=${encodeURIComponent(genus)}&species_name=${encodeURIComponent(speciesName)}`;
        const sciRes = await fetch(sciUrl, { headers });

        if (sciRes.ok) {
          const sciData = await sciRes.json();
          const assessments = sciData.assessments || [];
          if (assessments.length > 0) {
            const latest = assessments.find(a => a.latest) || assessments[0];
            assessmentId = latest.assessment_id;
          }
        }
      }
    }

    if (!assessmentId) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          error: `No species found for "${species}". Try using the scientific name — for example "Panthera uncia" for Snow Leopard.`
        }),
      };
    }

    // Step 3: Fetch the full assessment
    const assessmentUrl = `https://api.iucnredlist.org/api/v4/assessment/${assessmentId}`;
    const assessmentRes = await fetch(assessmentUrl, { headers });

    if (!assessmentRes.ok) {
      return {
        statusCode: assessmentRes.status,
        body: JSON.stringify({ error: `Could not fetch assessment data (${assessmentRes.status})` }),
      };
    }

    const assessment = await assessmentRes.json();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(assessment),
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error", detail: err.message }),
    };
  }
};
