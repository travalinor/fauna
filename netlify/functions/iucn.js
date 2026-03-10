// Species lookup table: common name -> IUCN scientific name (genus + species)
// Required because the IUCN v4 API does not support reliable common name search.
// Priority 3: expanded from ~80 to ~250 species across key categories.

const SPECIES_LOOKUP = {
  // -------------------------------------------------------------------------
  // GREAT APES & PRIMATES
  // -------------------------------------------------------------------------
  'mountain gorilla':        'Gorilla beringei',
  'western gorilla':         'Gorilla gorilla',
  'eastern gorilla':         'Gorilla beringei',
  'chimpanzee':              'Pan troglodytes',
  'bonobo':                  'Pan paniscus',
  'sumatran orangutan':      'Pongo abelii',
  'bornean orangutan':       'Pongo pygmaeus',
  'tapanuli orangutan':      'Pongo tapanuliensis',
  'gibbon':                  'Hylobates lar',
  'siamang':                 'Symphalangus syndactylus',
  'ring-tailed lemur':       'Lemur catta',
  'aye-aye':                 'Daubentonia madagascariensis',
  'indri':                   'Indri indri',
  'proboscis monkey':        'Nasalis larvatus',
  'golden snub-nosed monkey': 'Rhinopithecus roxellana',
  'mandrill':                'Mandrillus sphinx',
  'gelada':                  'Theropithecus gelada',

  // -------------------------------------------------------------------------
  // BIG CATS & WILD FELIDS
  // -------------------------------------------------------------------------
  'snow leopard':            'Panthera uncia',
  'tiger':                   'Panthera tigris',
  'amur tiger':              'Panthera tigris',
  'bengal tiger':            'Panthera tigris',
  'lion':                    'Panthera leo',
  'african lion':            'Panthera leo',
  'jaguar':                  'Panthera onca',
  'leopard':                 'Panthera pardus',
  'amur leopard':            'Panthera pardus',
  'cheetah':                 'Acinonyx jubatus',
  'clouded leopard':         'Neofelis nebulosa',
  'sunda clouded leopard':   'Neofelis diardi',
  'puma':                    'Puma concolor',
  'cougar':                  'Puma concolor',
  'ocelot':                  'Leopardus pardalis',
  'serval':                  'Leptailurus serval',
  'caracal':                 'Caracal caracal',
  'fishing cat':             'Prionailurus viverrinus',
  'iberian lynx':            'Lynx pardinus',
  'eurasian lynx':           'Lynx lynx',
  'canada lynx':             'Lynx canadensis',

  // -------------------------------------------------------------------------
  // AFRICAN BIG FIVE & SAFARI SPECIES
  // -------------------------------------------------------------------------
  'african elephant':        'Loxodonta africana',
  'savanna elephant':        'Loxodonta africana',
  'forest elephant':         'Loxodonta cyclotis',
  'african buffalo':         'Syncerus caffer',
  'cape buffalo':            'Syncerus caffer',
  'african leopard':         'Panthera pardus',
  'white rhinoceros':        'Ceratotherium simum',
  'black rhinoceros':        'Diceros bicornis',
  'giraffe':                 'Giraffa camelopardalis',
  'common hippopotamus':     'Hippopotamus amphibius',
  'hippopotamus':            'Hippopotamus amphibius',
  'pygmy hippopotamus':      'Choeropsis liberiensis',
  'zebra':                   'Equus quagga',
  'plains zebra':            'Equus quagga',
  'grevy\'s zebra':           'Equus grevyi',
  'mountain zebra':          'Equus zebra',
  'african wild dog':        'Lycaon pictus',
  'painted dog':             'Lycaon pictus',
  'spotted hyena':           'Crocuta crocuta',
  'aardvark':                'Orycteropus afer',
  'african wild ass':        'Equus africanus',
  'gemsbok':                 'Oryx gazella',
  'oryx':                    'Oryx gazella',
  'wildebeest':              'Connochaetes taurinus',
  'gnu':                     'Connochaetes taurinus',
  'impala':                  'Aepyceros melampus',
  'kudu':                    'Tragelaphus strepsiceros',
  'sable antelope':          'Hippotragus niger',
  'roan antelope':           'Hippotragus equinus',
  'african penguin':         'Spheniscus demersus',
  'secretary bird':          'Sagittarius serpentarius',
  'marabou stork':           'Leptoptilos crumenifer',
  'shoebill':                'Balaeniceps rex',

  // -------------------------------------------------------------------------
  // ASIAN MEGAFAUNA
  // -------------------------------------------------------------------------
  'giant panda':             'Ailuropoda melanoleuca',
  'red panda':               'Ailurus fulgens',
  'asian elephant':          'Elephas maximus',
  'indian elephant':         'Elephas maximus',
  'sumatran elephant':       'Elephas maximus',
  'javan rhinoceros':        'Rhinoceros sondaicus',
  'sumatran rhinoceros':     'Dicerorhinus sumatrensis',
  'indian rhinoceros':       'Rhinoceros unicornis',
  'greater one-horned rhinoceros': 'Rhinoceros unicornis',
  'gaur':                    'Bos gaurus',
  'banteng':                 'Bos javanicus',
  'takin':                   'Budorcas taxicolor',
  'dhole':                   'Cuon alpinus',
  'asian wild dog':          'Cuon alpinus',
  'sun bear':                'Helarctos malayanus',
  'asiatic black bear':      'Ursus thibetanus',
  'sloth bear':              'Melursus ursinus',
  'giant flying squirrel':   'Petaurista petaurista',
  'babirusa':                'Babyrousa babyrussa',
  'tapir':                   'Tapirus indicus',
  'malayan tapir':           'Tapirus indicus',
  'saola':                   'Pseudoryx nghetinhensis',
  'irrawaddy dolphin':       'Orcaella brevirostris',

  // -------------------------------------------------------------------------
  // BEARS
  // -------------------------------------------------------------------------
  'polar bear':              'Ursus maritimus',
  'brown bear':              'Ursus arctos',
  'grizzly bear':            'Ursus arctos',
  'american black bear':     'Ursus americanus',
  'spectacled bear':         'Tremarctos ornatus',
  'andean bear':             'Tremarctos ornatus',
  'giant panda':             'Ailuropoda melanoleuca',

  // -------------------------------------------------------------------------
  // MARINE MAMMALS — WHALES & DOLPHINS
  // -------------------------------------------------------------------------
  'humpback whale':          'Megaptera novaeangliae',
  'blue whale':              'Balaenoptera musculus',
  'fin whale':               'Balaenoptera physalus',
  'sei whale':               'Balaenoptera borealis',
  'minke whale':             'Balaenoptera acutorostrata',
  'sperm whale':             'Physeter macrocephalus',
  'orca':                    'Orcinus orca',
  'killer whale':            'Orcinus orca',
  'narwhal':                 'Monodon monoceros',
  'beluga whale':            'Delphinapterus leucas',
  'bowhead whale':           'Balaena mysticetus',
  'north atlantic right whale': 'Eubalaena glacialis',
  'southern right whale':    'Eubalaena australis',
  'grey whale':              'Eschrichtius robustus',
  'gray whale':              'Eschrichtius robustus',
  'common dolphin':          'Delphinus delphis',
  'bottlenose dolphin':      'Tursiops truncatus',
  'spinner dolphin':         'Stenella longirostris',
  'risso\'s dolphin':         'Grampus griseus',
  'vaquita':                 'Phocoena sinus',
  'ganges river dolphin':    'Platanista gangetica',
  'amazon river dolphin':    'Inia geoffrensis',
  'pink river dolphin':      'Inia geoffrensis',

  // -------------------------------------------------------------------------
  // MARINE MAMMALS — SEALS, SEA LIONS & DUGONGS
  // -------------------------------------------------------------------------
  'dugong':                  'Dugong dugon',
  'west indian manatee':     'Trichechus manatus',
  'manatee':                 'Trichechus manatus',
  'amazon manatee':          'Trichechus inunguis',
  'grey seal':               'Halichoerus grypus',
  'gray seal':               'Halichoerus grypus',
  'common seal':             'Phoca vitulina',
  'harbour seal':            'Phoca vitulina',
  'monk seal':               'Monachus monachus',
  'mediterranean monk seal': 'Monachus monachus',
  'hawaiian monk seal':      'Neomonachus schauinslandi',
  'leopard seal':            'Hydrurga leptonyx',
  'weddell seal':            'Leptonychotes weddellii',
  'walrus':                  'Odobenus rosmarus',
  'californian sea lion':    'Zalophus californianus',
  'steller sea lion':        'Eumetopias jubatus',
  'galapagos sea lion':      'Zalophus wollebaeki',
  'fur seal':                'Arctocephalus pusillus',

  // -------------------------------------------------------------------------
  // SHARKS, RAYS & LARGE FISH
  // -------------------------------------------------------------------------
  'whale shark':             'Rhincodon typus',
  'great white shark':       'Carcharodon carcharias',
  'hammerhead shark':        'Sphyrna lewini',
  'tiger shark':             'Galeocerdo cuvier',
  'basking shark':           'Cetorhinus maximus',
  'manta ray':               'Mobula birostris',
  'giant manta ray':         'Mobula birostris',
  'sawfish':                 'Pristis pristis',
  'largetooth sawfish':      'Pristis pristis',
  'bluefin tuna':            'Thunnus thynnus',
  'atlantic bluefin tuna':   'Thunnus thynnus',
  'giant grouper':           'Epinephelus lanceolatus',

  // -------------------------------------------------------------------------
  // SEA TURTLES
  // -------------------------------------------------------------------------
  'leatherback turtle':      'Dermochelys coriacea',
  'green turtle':            'Chelonia mydas',
  'green sea turtle':        'Chelonia mydas',
  'hawksbill turtle':        'Eretmochelys imbricata',
  'loggerhead turtle':       'Caretta caretta',
  'olive ridley turtle':     'Lepidochelys olivacea',
  'kemp\'s ridley turtle':    'Lepidochelys kempii',
  'flatback turtle':         'Natator depressus',

  // -------------------------------------------------------------------------
  // REPTILES
  // -------------------------------------------------------------------------
  'komodo dragon':           'Varanus komodoensis',
  'saltwater crocodile':     'Crocodylus porosus',
  'nile crocodile':          'Crocodylus niloticus',
  'american crocodile':      'Crocodylus acutus',
  'gharial':                 'Gavialis gangeticus',
  'mugger crocodile':        'Crocodylus palustris',
  'galapagos iguana':        'Amblyrhynchus cristatus',
  'marine iguana':           'Amblyrhynchus cristatus',
  'galapagos tortoise':      'Chelonoidis niger',
  'aldabra tortoise':        'Aldabrachelys gigantea',
  'chinese giant salamander': 'Andrias davidianus',
  'king cobra':              'Ophiophagus hannah',
  'python':                  'Python bivittatus',
  'burmese python':          'Python bivittatus',
  'gila monster':            'Heloderma suspectum',

  // -------------------------------------------------------------------------
  // AMPHIBIANS
  // -------------------------------------------------------------------------
  'chinese giant salamander': 'Andrias davidianus',
  'axolotl':                 'Ambystoma mexicanum',
  'golden poison frog':      'Phyllobates terribilis',
  'blue poison dart frog':   'Dendrobates tinctorius',
  'goliath frog':            'Conraua goliath',
  'mountain chicken':        'Leptodactylus fallax',
  'hellbender':              'Cryptobranchus alleganiensis',

  // -------------------------------------------------------------------------
  // BIRDS — RAPTORS
  // -------------------------------------------------------------------------
  'harpy eagle':             'Harpia harpyja',
  'philippine eagle':        'Pithecophaga jefferyi',
  'bald eagle':              'Haliaeetus leucocephalus',
  'white-tailed eagle':      'Haliaeetus albicilla',
  'stellers sea eagle':      'Haliaeetus pelagicus',
  'bearded vulture':         'Gypaetus barbatus',
  'lammergeier':             'Gypaetus barbatus',
  'andean condor':           'Vultur gryphus',
  'california condor':       'Gymnogyps californianus',
  'peregrine falcon':        'Falco peregrinus',
  'saker falcon':            'Falco cherrug',
  'gyrfalcon':               'Falco rusticolus',
  'osprey':                  'Pandion haliaetus',

  // -------------------------------------------------------------------------
  // BIRDS — PENGUINS
  // -------------------------------------------------------------------------
  'emperor penguin':         'Aptenodytes forsteri',
  'king penguin':            'Aptenodytes patagonicus',
  'gentoo penguin':          'Pygoscelis papua',
  'chinstrap penguin':       'Pygoscelis antarcticus',
  'macaroni penguin':        'Eudyptes chrysolophus',
  'little penguin':          'Eudyptula minor',
  'fairy penguin':           'Eudyptula minor',
  'galapagos penguin':       'Spheniscus mendiculus',

  // -------------------------------------------------------------------------
  // BIRDS — UK & BLUE EARTH SUMMIT AUDIENCE RELEVANT
  // -------------------------------------------------------------------------
  'red kite':                'Milvus milvus',
  'osprey':                  'Pandion haliaetus',
  'barn owl':                'Tyto alba',
  'atlantic puffin':         'Fratercula arctica',
  'puffin':                  'Fratercula arctica',
  'gannet':                  'Morus bassanus',
  'northern gannet':         'Morus bassanus',
  'corncrake':               'Crex crex',
  'capercaillie':            'Tetrao urogallus',
  'common kingfisher':       'Alcedo atthis',
  'kingfisher':              'Alcedo atthis',
  'curlew':                  'Numenius arquata',
  'eurasian curlew':         'Numenius arquata',
  'lapwing':                 'Vanellus vanellus',
  'skylark':                 'Alauda arvensis',
  'swift':                   'Apus apus',
  'common swift':            'Apus apus',

  // -------------------------------------------------------------------------
  // BIRDS — OTHER ICONIC SPECIES
  // -------------------------------------------------------------------------
  'kakapo':                  'Strigops habroptila',
  'kiwi':                    'Apteryx australis',
  'southern cassowary':      'Casuarius casuarius',
  'emu':                     'Dromaius novaehollandiae',
  'ostrich':                 'Struthio camelus',
  'flamingo':                'Phoenicopterus roseus',
  'greater flamingo':        'Phoenicopterus roseus',
  'resplendent quetzal':     'Pharomachrus mocinno',
  'hyacinth macaw':          'Anodorhynchus hyacinthinus',
  'scarlet macaw':           'Ara macao',
  'spix\'s macaw':            'Cyanopsitta spixii',
  'bird of paradise':        'Paradisaea apoda',
  'jabiru':                  'Jabiru mycteria',
  'whooping crane':          'Grus americana',
  'sarus crane':             'Antigone antigone',
  'japanese crane':          'Grus japonensis',
  'red-crowned crane':       'Grus japonensis',
  'wandering albatross':     'Diomedea exulans',
  'albatross':               'Diomedea exulans',

  // -------------------------------------------------------------------------
  // WOLVES, FOXES & CANIDS
  // -------------------------------------------------------------------------
  'grey wolf':               'Canis lupus',
  'gray wolf':               'Canis lupus',
  'timber wolf':             'Canis lupus',
  'ethiopian wolf':          'Canis simensis',
  'maned wolf':              'Chrysocyon brachyurus',
  'dhole':                   'Cuon alpinus',
  'arctic fox':              'Vulpes lagopus',
  'swift fox':               'Vulpes velox',
  'fennec fox':              'Vulpes zerda',
  'coyote':                  'Canis latrans',

  // -------------------------------------------------------------------------
  // DEER, ANTELOPE & BOVIDS
  // -------------------------------------------------------------------------
  'reindeer':                'Rangifer tarandus',
  'caribou':                 'Rangifer tarandus',
  'moose':                   'Alces alces',
  'elk':                     'Cervus canadensis',
  'red deer':                'Cervus elaphus',
  'fallow deer':             'Dama dama',
  'roe deer':                'Capreolus capreolus',
  'mountain goat':           'Oreamnos americanus',
  'bighorn sheep':           'Ovis canadensis',
  'snow sheep':              'Ovis nivicola',
  'ibex':                    'Capra ibex',
  'alpine ibex':             'Capra ibex',
  'markhor':                 'Capra falconeri',
  'saiga':                   'Saiga tatarica',
  'saiga antelope':          'Saiga tatarica',
  'tibetan antelope':        'Pantholops hodgsonii',
  'chiru':                   'Pantholops hodgsonii',
  'american bison':          'Bison bison',
  'european bison':          'Bison bonasus',
  'wisent':                  'Bison bonasus',
  'musk ox':                 'Ovibos moschatus',

  // -------------------------------------------------------------------------
  // OTHER MAMMALS
  // -------------------------------------------------------------------------
  'platypus':                'Ornithorhynchus anatinus',
  'echidna':                 'Tachyglossus aculeatus',
  'koala':                   'Phascolarctos cinereus',
  'tasmanian devil':         'Sarcophilus harrisii',
  'wombat':                  'Vombatus ursinus',
  'quoll':                   'Dasyurus viverrinus',
  'numbat':                  'Myrmecobius fasciatus',
  'aardwolf':                'Proteles cristata',
  'pangolin':                'Manis javanica',
  'sunda pangolin':          'Manis javanica',
  'chinese pangolin':        'Manis pentadactyla',
  'giant anteater':          'Myrmecophaga tridactyla',
  'giant armadillo':         'Priodontes maximus',
  'binturong':               'Arctictis binturong',
  'clouded leopard':         'Neofelis nebulosa',
  'wolverine':               'Gulo gulo',
  'european otter':          'Lutra lutra',
  'giant otter':             'Pteronura brasiliensis',
  'sea otter':               'Enhydra lutris',
  'capybara':                'Hydrochoerus hydrochaeris',
  'giant river otter':       'Pteronura brasiliensis',
};

exports.handler = async function (event) {
  const raw = event.queryStringParameters && event.queryStringParameters.species;

  if (!raw) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'No species name provided' }),
    };
  }

  const token = process.env.IUCN_TOKEN;

  if (!token) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'API token not configured' }),
    };
  }

  // Resolve scientific name via lookup table, or use the query directly
  // (allows scientific names to be typed in directly too)
  const key = raw.trim().toLowerCase();
  const scientificName = SPECIES_LOOKUP[key] || raw.trim();

  try {
    // Search for the species by scientific name
    const searchUrl = `https://api.iucnredlist.org/api/v4/taxa/scientific_name?name=${encodeURIComponent(scientificName)}`;
    const searchRes = await fetch(searchUrl, {
      headers: {
        Authorization: token,
        accept: 'application/json',
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
        body: JSON.stringify({ error: 'Species not found in IUCN Red List' }),
      };
    }

    // Use the most recent assessment
    const assessment = searchData.assessments[0];
    const assessmentId = assessment.assessment_id;

    // Fetch full assessment details
    const detailUrl = `https://api.iucnredlist.org/api/v4/assessment/${assessmentId}`;
    const detailRes = await fetch(detailUrl, {
      headers: {
        Authorization: token,
        accept: 'application/json',
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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(detail),
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error', detail: err.message }),
    };
  }
};
