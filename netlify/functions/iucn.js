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

  try {
    // Search for the species by name
    const searchUrl = `https://api.iucnredlist.org/api/v4/taxa/scientific_name?name=${encodeURIComponent(species)}`;
    const searchRes = await fetch(searchUrl, {
      headers: {
        Authorization: token,
        accept: "application/json",
      },
    });

    if (!searchRes.ok) {
      const errText = await searchRes.text();
      return {
        statusCode: searchRes.status,
        body: JSON.stringify({ error: `IUCN API error: ${searchRes.status}`, detail: errText }),
      };
    }

    const searchData = await searchRes.json();

    if (!searchData || !searchData.assessments || searchData.assessments.length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Species not found in IUCN Red List" }),
      };
    }

    // Get the most recent assessment
    const assessment = searchData.assessments[0];
    const assessmentId = assessment.assessment_id;

    // Fetch full assessment details
    const detailUrl = `https://api.iucnredlist.org/api/v4/assessment/${assessmentId}`;
    const detailRes = await fetch(detailUrl, {
      headers: {
        Authorization: token,
        accept: "application/json",
      },
    });

    if (!detailRes.ok) {
      return {
        statusCode: detailRes.status,
        body: JSON.stringify({ error: `IUCN detail error: ${detailRes.status}` }),
      };
    }

    const detail = await detailRes.json();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(detail),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error", detail: err.message }),
    };
  }
};
