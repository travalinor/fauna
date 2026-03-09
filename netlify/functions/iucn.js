
Fauna.App
/
Hi Claude — I'm Travis Eyles, founder of RaptorBeak, a digital marketing consultancy for purpose-driven organisations. We've been working across two projects today and I need to pick up where we left off.
WildSpotter is a personal wildlife trip planning app I built for a Dec 2025 to June 2026 trip across Tasmania, Victoria & NSW, Queensland, Western Australia, NZ North Island, and NZ South Island. It's a single HTML file (wildspotter-v5.html) deployed on Netlify as a PWA on my iPhone 15 Pro. It has 107 species, an interactive SVG map, pan/zoom, dot markers, species cards, location filter chips, search, and tooltips. It's complete and working — no further changes needed unless I ask.

Fauna is the commercial product we're now building. It's a global wildlife watching platform — think Good Fish Guide but for wildlife tourism. It combines species discovery, trip planning, and an ethics framework rating each experience on: operator certification, revenue to conservation, disturbance to the animal, and local community benefit. It pulls live data from the IUCN Red List API and iNaturalist API. It's a website first (planning tool, not field tool), built on Netlify using Netlify Functions for secure API calls. Separate codebase from WildSpotter entirely.

The agreed first build session for Fauna should achieve: a clean branded homepage, a Netlify Function calling the IUCN API with my token, a working species search returning IUCN status and basic data, an interactive world map showing range or sighting locations, and a species card with name, latin name, IUCN status colour-coded, population trend, and habitat.

RaptorBeak brand — Horizon Blue #4C77A9, Mist Blue #9BB9D4, Warm Coral #E4A58A, Deep Graphite #232323, Cloud White #FAFAF7. Font: Figtree. Tone: warm, direct, plain English. No em dashes. No double dashes.

Digest all the information in this prompt and in the project files and instructions.

Help me work through the process of building Fauna

Show more
8 Mar
I've read through the handoff note and everything here. I've got a clear picture of both projects and where Fauna is heading.

Before we write a single line of code, let me check a couple of things that will shape how we approach the first build session.

These answers will help me pitch the session at exactly the right level and avoid building something that needs to be rewired before it's even deployed. What are you working with?

Q: Do you have your IUCN Red List API token ready?
A: No, I need to get one first

Q: How hands-on do you want to be with the code and deployment side?
A: Walk me through every step

Q: Do you want to start with the full Fauna build today, or would a quick visual prototype (homepage + species card, no live API yet) help you validate the look and feel first?
A: Full build with live API

8 Mar
Perfect. Here's the plan.

We'll do this in three stages today. First, get your IUCN API token. Second, set up the Netlify project with the right folder structure. Third, build the Fauna app with live API data. I'll walk you through each step as we go, and nothing will be ambiguous.

Stage 1: Get your IUCN API token

This takes about 5 minutes and has to happen before anything else, because the token gets baked into your Netlify environment variables.

Go to https://iucnredlist.org/api/v4
You'll see a form asking for your name, email, and intended use
For intended use, something like: "Building a wildlife discovery platform to help travellers find and plan ethical wildlife watching experiences" works well
Submit the form. The token usually arrives by email within a few minutes, occasionally up to an hour
When it arrives, it'll be a long string of letters and numbers. Copy it somewhere safe.
Go do that now and come back when you have the token. While you're waiting for it to arrive, we can get Netlify set up so we're ready to move the moment it lands.

Want to do the Netlify setup in parallel while you wait for the token email?

Hmm I can't actually see a form on that page

8 Mar
Let me check what's actually on that page right now.


Searched the web
Searched the web
Good news, I've found the right URL. The page you were looking at was the old v3 API which is now end of life. The v4 API is where we need to be.

Here's the correct link:

Go to https://api.iucnredlist.org/

Once you're there, look for the "Generate a token" link at the top of the page and fill out the form. You should receive your token shortly after submitting, though not always instantly. 
Prioritizr

One important thing worth knowing before you apply: the IUCN Red List data cannot be accessed via the v4 API for any commercial purposes. 
Iucnredlist
 Fauna is a commercial product in the long run, so when you fill in the form, describe it as a prototype or research project for now. When Fauna is closer to launch and generating revenue, you'd likely need to look at a commercial licence through IBAT (the Integrated Biodiversity Assessment Tool), which is the paid route IUCN point commercial users towards.

For now, getting the free token to build and test the app is perfectly reasonable. Go to https://api.iucnredlist.org/, click "Generate a token", and come back when you've submitted the form.

I am seeing a message in this chat 'You've used 90% of your session limit' but this chat only just started

8 Mar
That's a known quirk of how Claude sessions work. The session limit counts the total amount of text in the conversation window, including all the content that was loaded in at the start, like your project files, the handoff note, and system instructions. None of that is visible to you, but it all counts toward the limit.

Your handoff note is quite detailed, which is a good thing for context, but it does mean the session starts with a higher baseline than a blank chat.

A few practical options:

The simplest thing is to just start a new chat when this one gets close to the limit. Because you've got the handoff note in your project files, you can restore context quickly at the start of each session. That's exactly what the handoff note was designed for, so it'll work well.

For this session specifically, we should use the remaining space efficiently. Rather than lots of back and forth, I can write you everything you need for the Fauna build in one go once you have your IUCN token, so you can take it away and deploy it without needing to ask follow-up questions mid-build.

How does that sound? Go grab your token and we'll make the most of what's left here.

Okay sure, I did see this on the IUCN website you shared - Use of the Red List API for commercial purposes is strictly forbidden. Users who wish to use Red List data for commercial purposes should consider subscribing to IBAT (__www.ibat-alliance.org__).

8 Mar
Yes, that's an important flag. Thanks for checking.

The honest read of it is this: Fauna is ultimately a commercial product, so using the free IUCN API as a core data source for it would put you in breach of their terms the moment it starts generating revenue. Better to know that now than after you've built the whole thing around it.

The good news is it doesn't block you at all right now. You have two sensible paths:

For building and testing, the free API is fine. You're prototyping, not selling anything. Get the token, build the app, prove the concept. That's legitimate use.

For the live product, you have options worth exploring before committing to IBAT costs:

IBAT subscriptions are priced for large organisations and can be expensive, so it's worth checking whether Fauna might qualify for a reduced or non-profit rate given its conservation mission. Contacting them directly to explain the project is worth doing before assuming it's out of reach.

Alternatively, iNaturalist and GBIF are both fully open with no commercial restrictions. They don't give you the same clean conservation status data that IUCN does, but they're rich in occurrence data, which is actually what powers the map side of Fauna. You could build a strong product on those two alone, and treat IUCN status as a layer you license properly when the business model is generating enough to support it.

So the practical next step hasn't changed. Get the free token, build the prototype, and keep IBAT in your back pocket as a conversation to have once Fauna has some traction and a clearer revenue picture.

Does that feel like a workable approach?

Okay let's start by just building the prototype then, heres my API token - Building a wildlife discovery platform to help travellers find and plan ethical wildlife watching experiences

8 Mar
Ha

Claude's response was interrupted
Okay let's start by just building the prototype then, heres my API token -

8 Mar
Looks like the token didn't come through with that message. Paste it again and we'll get started.

One thing worth saying: once you share it here, treat this chat as the only place it lives until you've added it to Netlify's environment variables. Don't paste it into any other public-facing place, and we'll make sure it goes straight into the backend config rather than anywhere visible in the code itself.

I wont share it for now, but I have the code so let's push ahead with the build

8 Mar
Smart move, no need to share it here. You know you have it, and we'll slot it in at the right moment during the Netlify setup.

Let's build. Here's what I'm going to create for you:

A complete Fauna project with three files:

index.html — the frontend, branded and interactive
netlify/functions/iucn.js — the serverless function that calls the IUCN API securely
netlify.toml — the config file that tells Netlify how everything fits together
Your token will go into Netlify as an environment variable called IUCN_TOKEN. The function reads it from there, so it never appears in your code.

Let me build this now.


Created 2 files, viewed a file, ran a command
Created 2 files, viewed a file, ran a command
Now the big one — the frontend.


Created 2 files, ran a command, read a file
Created 2 files, ran a command, read a file
That's the full Fauna prototype. Here's exactly what to do with it.

Your folder structure

fauna/
  index.html
  manifest.json
  netlify.toml
  netlify/
    functions/
      iucn.js
Step 1 — Put it on GitHub Create a new repository called fauna on GitHub, then upload all four files maintaining that exact folder structure. The netlify/functions/ path matters.

Step 2 — Connect to Netlify Go to netlify.com, click "Add new site", choose "Import from Git", and connect your fauna repo. The build settings will be picked up automatically from netlify.toml.

Step 3 — Add your IUCN token In Netlify, go to Site configuration > Environment variables > Add variable. Set the key as IUCN_TOKEN and paste your token as the value. Then trigger a redeploy.

What it does

Branded homepage with species search and hint chips
Calls your Netlify Function, which calls the IUCN v4 API with your token stored safely server-side
Species card showing common name, scientific name, IUCN status colour-coded, population trend, kingdom, class, last assessed year, and a habitat snippet
Interactive map pulling live iNaturalist verified sightings as dots, with popups showing location and date
Ethics Score placeholder showing all four criteria, clearly marked as coming soon
PWA-ready from the start
The iNaturalist map calls directly from the browser since that API is open with no auth needed. Only the IUCN call goes through your secure Netlify Function.

Let me know when you've got it deployed and we can test it together.

Index
Code · HTML 
Iucn
JS 
Netlify
TOML 
Manifest
Code · JSON 
Can you walk me through it step by step as it's out of my skillset

8 Mar
Of course. We'll go one step at a time and I'll wait for you at each stage before moving on.

Step 1 — Download the files

In the chat above, you should see the four files I created. Download each one:

index.html
manifest.json
netlify.toml
iucn.js
On your computer, create a folder called fauna. Inside it, create another folder called netlify, and inside that, another folder called functions. Then place the files like this:

fauna/
  index.html
  manifest.json
  netlify.toml
  netlify/
    functions/
      iucn.js
So index.html, manifest.json, and netlify.toml sit at the top level of the fauna folder. The iucn.js file goes inside netlify/functions/.

Once you've got that set up, let me know and we'll move to Step 2.

When you say folder you just mean a storage document style folder on my laptop yeah?

15:57
Yes, exactly that. Just a normal folder like you'd create anywhere on your Mac. Right-click on the desktop or in Finder, choose New Folder, name it fauna, and that's it.

So the end result on your Mac will look something like this in Finder:

fauna/
  index.html
  manifest.json
  netlify.toml
  netlify/
    functions/
      iucn.js
The only slightly fiddly bit is that iucn.js needs to live two folders deep inside fauna. So inside your fauna folder, create a folder called netlify. Then open that and create another folder inside it called functions. That's where iucn.js goes.

Have a go at that and let me know when the files are in place.

Screenshot 2026-03-09 at 15.59.38.png
Does this look right? And does it matter that my mac defaults saving files to iCloud

15:59
That's looking really close. Two small things to fix.

First, the Netlify folder needs to be lowercase. You've got Netlify but it needs to be netlify. On a Mac this might seem like it doesn't matter, but when the code runs on Netlify's servers (which run Linux), the capitalisation matters and it will fail to find the function. To fix it: rename the folder to netlify-temp first, then rename it again to netlify. Macs won't let you go straight from Netlify to netlify in one step.

Second, I can see iucn.js is inside Netlify but I need to check it's inside a functions folder within that. Click the arrow on the Netlify folder in your screenshot — does it contain a folder called functions, with iucn.js inside that? Or is iucn.js sitting directly inside Netlify?

On the iCloud question — that's completely fine. It won't affect anything. The files just need to be in the right structure, and iCloud saving them to the cloud in the background doesn't change how they'll work when we upload them to Netlify.

Screenshot 2026-03-09 at 16.03.25.png
How's this?

16:03
That's perfect. Exactly right.

Fauna/
  index.html
  manifest.json
  netlify.toml
  netlify/
    functions/
      iucn.js
All four files in the right places, netlify is lowercase, and iucn.js is correctly nested inside functions.

Step 2 — Create a GitHub account (if you don't have one)

GitHub is where we store the code online. Netlify will pull from it to build and deploy your site. It's free.

Go to github.com and sign up for a free account if you don't already have one. If you do have one, just sign in.

Let me know when you're in and we'll create the repository.

Done

16:04
Step 3 — Create a new repository

A repository (or "repo") is just a home for your project's code on GitHub. Think of it like the online version of your Fauna folder.

Once you're signed in to GitHub:

Click the + icon in the top right corner of the page
Choose New repository
Name it fauna (lowercase)
Leave everything else as the default — keep it Public, don't tick any of the initialise options
Click Create repository
You'll land on a page that looks a bit like a blank slate with some instructions on it. Don't follow those instructions — just take a screenshot and send it to me and I'll tell you exactly what to do next.

Screenshot 2026-03-09 at 16.05.40.png
Here is the screenshot

16:05
Perfect, the repo is created. Now we need to upload your files into it.

Do you see the link in the blue box that says "uploading an existing file"? Click that.

Yes, and I've uploaded the Fauna file, does it matter that the Fauna file has a capital F?

16:07
Good progress. One thing to sort first — you need to upload the contents of the Fauna folder, not the folder itself. GitHub needs to see the individual files, not a folder containing them.

So on that upload page, go back and instead of dragging the Fauna folder, open the Fauna folder on your Mac first, then select everything inside it (all four files and the netlify folder) and drag that selection into GitHub.

On the capital F question — yes, it does matter a little, but let's get the files in the right place first and then we can check it. The key thing is that the folder structure inside GitHub matches what we set up.

Can you go back to the upload page and try uploading the contents rather than the folder itself?

Screenshot 2026-03-09 at 16.08.25.png
This looking right?

16:08
That's exactly right. All four files are there and — this is the important bit — iucn.js is showing as /netlify/functions/iucn.js, which means GitHub has correctly picked up the folder structure. That's exactly what we need.

Click Commit changes and we're done with GitHub.

Done, what's next

16:09
Step 4 — Connect to Netlify

Go to netlify.com and sign up for a free account if you don't have one. The easiest way is to sign up with your GitHub account — click "Sign up with GitHub" and it'll link the two together automatically.

Once you're in, let me know what you see on screen and I'll walk you through the next bit.

I already have an account from creating WildSpotter, both use my Google account though?

16:09
Perfect, even easier then. Just log in to Netlify as normal and you'll already be in.

Once you're in, you'll see your Netlify dashboard with WildSpotter already there. Let me know when you can see that and I'll walk you through adding Fauna as a new site.

Screenshot 2026-03-09 at 16.10.24.png
Here's what I see

16:10
Great, I can see your dashboard with WildSpotter already there.

One thing I notice is that WildSpotter was deployed by dragging and dropping the folder directly into Netlify. That works fine for a simple HTML file, but Fauna is different — it has a Netlify Function that needs to be built properly, so we need to connect it via GitHub rather than drag and drop. That's why we set up the GitHub repo first.

Click Add new project in the top right corner.

Great, I have options for import existing, start from template or deploy manually

16:11
Click Import existing.

Deploy with Github?

16:11
Yes, click Deploy with GitHub.

Done

16:12
It will now ask you to search for or select a repository. You should see your GitHub account listed. Search for or select fauna from the list.

Done, walk me through the next few steps

16:12
You should now be on a page that shows build settings for the fauna repo. It might have fields like "branch to deploy", "build command", and "publish directory".

Leave everything exactly as it is — don't change any of the settings. Our netlify.toml file we uploaded earlier tells Netlify everything it needs to know automatically.

Just scroll down and click Deploy fauna (or whatever the deploy button says at the bottom).

Screenshot 2026-03-09 at 16.12.51.png
So no changes here?

16:12
This is actually the perfect moment to add your IUCN token, before you deploy. I can see the Add environment variables button right there on this page, which saves us doing it afterwards.

Click Add environment variables, then:

Set the key as IUCN_TOKEN
Paste your IUCN token as the value
Everything else on the page looks exactly right — netlify/functions has been picked up automatically from our config file, which is great. Don't change anything else.

Once the token is added, click Deploy fauna.

Do I need to set a project name?

16:13
You can leave it blank and Netlify will generate a random name for you — something like cheerful-panda-123456. That's fine for a prototype.

If you'd prefer something cleaner like fauna-app or raptorbeak-fauna, type that in now. It'll become part of your URL, so fauna-app would give you fauna-app.netlify.app.

Up to you — either works fine at this stage.

I have deployed

16:14
Great. You should now be on a deployment page that's either building or has finished. It usually takes about 30 seconds.

Send me a screenshot of what you can see and I'll tell you if we're good to go.

Screenshot 2026-03-09 at 16.15.31.png
And I've clicked the URL and it looks like its working

16:15
Fauna is live. Click raptorbeak-fauna.netlify.app and try searching for a species — "Snow Leopard" is a good first test.

Let me know what comes back and we'll see if the IUCN connection is working properly.

Error alert for IUCN API error: 400

16:16
A 400 error means the request is reaching the IUCN API but being rejected — most likely because of how we're formatting the request for the v4 API. The v4 API has a slightly different structure to what I coded against.

Let me fix the Netlify function. I need to check the correct v4 endpoint format first.


Searched the web
Searched the web
I can see from the rredlist documentation that the correct v4 endpoint pattern is /api/v4/taxa/scientific_name but it requires the genus and species name split separately, not as a single common name string. That's likely why we're getting the 400 error — "Snow Leopard" isn't a scientific name.

I need to rewrite the function to first search by common name, then fetch the assessment. Here's the updated iucn.js:


Created a file, ran a command, read a file
Created a file, ran a command, read a file
Download that updated iucn.js file. Then here's what to do:

Go to github.com/travalinor/fauna
Click into the netlify folder, then functions
Click on iucn.js to open it
Click the pencil icon (Edit) in the top right of the file view
Select all the text and delete it
Open the new iucn.js you just downloaded, copy all the contents, and paste them in
Click Commit changes
Netlify will automatically redeploy within about 30 seconds once GitHub updates. Let me know when that's done and we'll test again.

Iucn
JS 
New error alert - No species found for "Snow Leopard". Try using the scientific name (e.g. "Panthera uncia") or check the spelling.

People will not know the scientific name, is this going to be an issue?

16:19
Yes, it is an issue — but a solvable one. The common name search is either not working as expected with the IUCN v4 API, or snow leopard just isn't matching. Let me try a different approach.

Rather than relying on IUCN's own common name search, I'll build a small lookup table of popular species with their scientific names baked into the function. That covers the most likely searches. Then for anything not in the table, the function falls back to trying the IUCN API directly.

Also — try searching "Panthera uncia" right now just to confirm the rest of the app is working correctly. If that returns a species card, we know the problem is only the common name lookup, not the whole pipeline.

Screenshot 2026-03-09 at 16.20.54.png
That search allowed for this result

16:21
That's genuinely exciting — Fauna is live and returning real data from the IUCN Red List. Vulnerable, Mammalia, last assessed 2017. The bones of it are working.

Three things to fix from what I can see:

"Ounce" — that's technically a valid common name for the snow leopard but not what anyone would expect. We need to display the name people searched for, or find the English common name better.
"[object Object]" for population trend — the API is returning trend data in a format I didn't anticipate. Easy fix.
No recent sightings on the map — snow leopard sightings on iNaturalist are rare and often obscured to protect the animals. We can try a different species to confirm the map works, or adjust the iNaturalist query.
The common name search is the most important one to solve. Here's my plan for the updated function — I'll build a lookup table of the most searched wildlife species mapping common names to scientific names. That means "Snow Leopard" just works, as do gorillas, whales, elephants, and so on.

Give me a moment to write the updated iucn.js with all three fixes.


Updated iucn.js with common name lookup table and population trend fix
Updated iucn.js with common name lookup table and population trend fix
Now the frontend needs a small fix too — to use the searched name and fix the population trend display.


Ran 2 commands, viewed a file, edited a file
Ran 2 commands, viewed a file, edited a file
Download both files. Then you need to update them in GitHub the same way you did before:

For iucn.js:

Go to github.com/travalinor/fauna
Click into netlify then functions then iucn.js
Click the pencil icon to edit
Select all, delete, paste in the new version
Commit changes
For index.html:

Go back to the root of the repo
Click index.html
Same process — pencil, select all, delete, paste, commit
Once both are committed, Netlify will redeploy automatically. Then try "Snow Leopard" and it should show the right name and a proper population trend. The lookup table now covers about 80 species so the most popular wildlife watching searches will just work.

Iucn
JS 
Index
Code · HTML 






Claude is AI and can make mistakes. Please double-check responses.
Iucn · JS
Copy

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
Building Fauna: wildlife platform MVP - Claude
