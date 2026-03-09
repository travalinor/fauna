// Common name to scientific name lookup
// Covers the most likely wildlife watching searches
const COMMON_NAME_MAP = {
  // Big cats
  "snow leopard": { genus: "Panthera", species: "uncia" },
  "tiger": { genus: "Panthera", species: "tigris" },
  "lion": { genus: "Panthera", species: "leo" },
  "leopard": { genus: "Panthera", species: "pardus" },
  "jaguar": { genus: "Panthera", species: "onca" },
  "cheetah": { genus: "Acinonyx", species: "jubatus" },
  "clouded leopard": { genus: "Neofelis", species: "nebulosa" },

  // Primates
  "mountain gorilla": { genus: "Gorilla", species: "beringei" },
  "western gorilla": { genus: "Gorilla", species: "gorilla" },
  "gorilla": { genus: "Gorilla", species: "gorilla" },
  "chimpanzee": { genus: "Pan", species: "troglodytes" },
  "bonobo": { genus: "Pan", species: "paniscus" },
  "orangutan": { genus: "Pongo", species: "pygmaeus" },
  "bornean orangutan": { genus: "Pongo", species: "pygmaeus" },
  "sumatran orangutan": { genus: "Pongo", species: "abelii" },
  "proboscis monkey": { genus: "Nasalis", species: "larvatus" },

  // Bears
  "polar bear": { genus: "Ursus", species: "maritimus" },
  "giant panda": { genus: "Ailuropoda", species: "melanoleuca" },
  "panda": { genus: "Ailuropoda", species: "melanoleuca" },
  "grizzly bear": { genus: "Ursus", species: "arctos" },
  "brown bear": { genus: "Ursus", species: "arctos" },
  "sun bear": { genus: "Helarctos", species: "malayanus" },
  "spectacled bear": { genus: "Tremarctos", species: "ornatus" },

  // Elephants
  "african elephant": { genus: "Loxodonta", species: "africana" },
  "african savanna elephant": { genus: "Loxodonta", species: "africana" },
  "african forest elephant": { genus: "Loxodonta", species: "cyclotis" },
  "asian elephant": { genus: "Elephas", species: "maximus" },

  // Rhinos
  "white rhino": { genus: "Ceratotherium", species: "simum" },
  "white rhinoceros": { genus: "Ceratotherium", species: "simum" },
  "black rhino": { genus: "Diceros", species: "bicornis" },
  "black rhinoceros": { genus: "Diceros", species: "bicornis" },
  "sumatran rhino": { genus: "Dicerorhinus", species: "sumatrensis" },
  "javan rhino": { genus: "Rhinoceros", species: "sondaicus" },
  "indian rhino": { genus: "Rhinoceros", species: "unicornis" },
  "greater one-horned rhinoceros": { genus: "Rhinoceros", species: "unicornis" },

  // Cetaceans
  "humpback whale": { genus: "Megaptera", species: "novaeangliae" },
  "blue whale": { genus: "Balaenoptera", species: "musculus" },
  "sperm whale": { genus: "Physeter", species: "macrocephalus" },
  "orca": { genus: "Orcinus", species: "orca" },
  "killer whale": { genus: "Orcinus", species: "orca" },
  "bottlenose dolphin": { genus: "Tursiops", species: "truncatus" },
  "narwhal": { genus: "Monodon", species: "monoceros" },
  "beluga whale": { genus: "Delphinapterus", species: "leucas" },
  "beluga": { genus: "Delphinapterus", species: "leucas" },
  "fin whale": { genus: "Balaenoptera", species: "physalus" },
  "right whale": { genus: "Eubalaena", species: "glacialis" },

  // Marine
  "great white shark": { genus: "Carcharodon", species: "carcharias" },
  "whale shark": { genus: "Rhincodon", species: "typus" },
  "hammerhead shark": { genus: "Sphyrna", species: "lewini" },
  "manta ray": { genus: "Mobula", species: "birostris" },
  "giant manta ray": { genus: "Mobula", species: "birostris" },
  "green sea turtle": { genus: "Chelonia", species: "mydas" },
  "leatherback turtle": { genus: "Dermochelys", species: "coriacea" },
  "hawksbill turtle": { genus: "Eretmochelys", species: "imbricata" },
  "loggerhead turtle": { genus: "Caretta", species: "caretta" },
  "dugong": { genus: "Dugong", species: "dugon" },
  "manatee": { genus: "Trichechus", species: "manatus" },

  // Birds
  "kakapo": { genus: "Strigops", species: "habroptila" },
  "california condor": { genus: "Gymnogyps", species: "californianus" },
  "philippine eagle": { genus: "Pithecophaga", species: "jefferyi" },
  "harpy eagle": { genus: "Harpia", species: "harpyja" },
  "wandering albatross": { genus: "Diomedea", species: "exulans" },
  "emperor penguin": { genus: "Aptenodytes", species: "forsteri" },
  "african penguin": { genus: "Spheniscus", species: "demersus" },
  "hyacinth macaw": { genus: "Anodorhynchus", species: "hyacinthinus" },
  "spix's macaw": { genus: "Cyanopsitta", species: "spixii" },

  // Wolves, dogs, foxes
  "grey wolf": { genus: "Canis", species: "lupus" },
  "gray wolf": { genus: "Canis", species: "lupus" },
  "wolf": { genus: "Canis", species: "lupus" },
  "african wild dog": { genus: "Lycaon", species: "pictus" },
  "painted dog": { genus: "Lycaon", species: "pictus" },
  "maned wolf": { genus: "Chrysocyon", species: "brachyurus" },
  "red wolf": { genus: "Canis", species: "rufus" },

  // Other mammals
  "giraffe": { genus: "Giraffa", species: "camelopardalis" },
  "hippopotamus": { genus: "Hippopotamus", species: "amphibius" },
  "hippo": { genus: "Hippopotamus", species: "amphibius" },
  "pygmy hippo": { genus: "Choeropsis", species: "liberiensis" },
  "giant anteater": { genus: "Myrmecophaga", species: "tridactyla" },
  "pangolin": { genus: "Manis", species: "javanica" },
  "sunda pangolin": { genus: "Manis", species: "javanica" },
  "platypus": { genus: "Ornithorhynchus", species: "anatinus" },
  "numbat": { genus: "Myrmecobius", species: "fasciatus" },
  "tasmanian devil": { genus: "Sarcophilus", species: "harrisii" },
  "quoll": { genus: "Dasyurus", species: "maculatus" },
  "snow monkey": { genus: "Macaca", species: "fuscata" },
  "japanese macaque": { genus: "Macaca", species: "fuscata" },
  "red panda": { genus: "Ailurus", species: "fulgens" },
  "okapi": { genus: "Okapia", species: "johnstoni" },
  "saiga": { genus: "Saiga", species: "tatarica" },
  "mountain zebra": { genus: "Equus", species: "zebra" },
  "grevy's zebra": { genus: "Equus", species: "grevyi" },
  "wild bactrian camel": { genus: "Camelus", species: "ferus" },

  // Reptiles & amphibians
  "komodo dragon": { genus: "Varanus", species: "komodoensis" },
  "chinese giant salamander": { genus: "Andrias", species: "davidianus" },
  "gharial": { genus: "Gavialis", species: "gangeticus" },
  "saltwater crocodile": { genus: "Crocodylus", species: "porosus" },
};

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
    let assessmentId = null;
    const normalised = species.trim().toLowerCase();

    // Step 1: Check local lookup table first
    const lookup = COMMON_NAME_MAP[normalised];

    if (lookup) {
      const sciUrl = `https://api.iucnredlist.org/api/v4/taxa/scientific_name?genus_name=${encodeURIComponent(lookup.genus)}&species_name=${encodeURIComponent(lookup.species)}`;
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

    // Step 2: If not in lookup, try as a scientific name (genus + species)
    if (!assessmentId) {
      const parts = species.trim().split(/\s+/);
      if (parts.length >= 2) {
        const sciUrl = `https://api.iucnredlist.org/api/v4/taxa/scientific_name?genus_name=${encodeURIComponent(parts[0])}&species_name=${encodeURIComponent(parts[1])}`;
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
          error: `No results found for "${species}". Try a well-known species name like "Snow Leopard", "Humpback Whale", or "Giant Panda".`,
        }),
      };
    }

    // Step 3: Fetch the full assessment
    const assessmentRes = await fetch(
      `https://api.iucnredlist.org/api/v4/assessment/${assessmentId}`,
      { headers }
    );

    if (!assessmentRes.ok) {
      return {
        statusCode: assessmentRes.status,
        body: JSON.stringify({ error: `Could not fetch assessment data (${assessmentRes.status})` }),
      };
    }

    const assessment = await assessmentRes.json();

    // Attach the searched common name so the frontend can use it
    assessment._searched_name = species;

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
