# [presence/service name]

## Description

## Acknowledgements
- [x] I read the [Presence Guidelines](https://github.com/PreMiD/Presences/blob/main/.github/CONTRIBUTING.md)
- [x] I linted the code by running `yarn format`
- [x] The PR title follows the repo's [commit conventions](https://github.com/PreMiD/Presences/blob/main/.github/COMMIT_CONVENTION.md)

## Screenshots

### Side-by-side

### Variations

| Image | Link visited |
| ----- | ------------ |

# [presence/service name]

## Description

## Acknowledgements
- [x] I read the [Presence Guidelines](https://github.com/PreMiD/Presences/blob/main/.github/CONTRIBUTING.md)
- [x] I linted the code by running `yarn format`
- [x] The PR title follows the repo's [commit conventions](https://github.com/PreMiD/Presences/blob/main/.github/COMMIT_CONVENTION.md)

## Changelog

## Screenshots

### Side-by-side

### Variations

| Image | Link visited |
| ----- | ------------ |

----

# PW codebase homogenization

## Description

Hello, everyone.

It's been a while since we've met. 9 months ago I developed the Wikimedia presence which codebase supports the `mw.config` method. With the tides are low, I finally got time to continue with it, along with some additions like the new-fangled button feature.

This PR updates all of the Wikimedia Foundation wikis. This PR will be accompanied with the other PR than also updates my other MediaWiki sites: #xxxx.

Now, some of you may remember the times where Mr. R commented about how the code works. While it's been a while since that, this also what discourages me on developing this. To this day I still stand on my opinion, but I saw that Mr. R didn't change my code and other reviewers merged it as it is. Add that with the fact that I still see people using my presences (see? it works!), I decided to give my time to this again. It is still tentative whether I will continue with this, but fingers crossed.

I don't know if this arch is settled, but I still know for the fact that Mr. R is still there on the Discord server. I will stay away from it for now. But, for Mr. R, I hope you are fine this.

This PR includes updates for the following presences:

- Wikibooks 1.1.0
- Wikidata 1.1.0
- Wikimedia Commons 1.1.0
- Wikimedia 1.1.0
- Wikinews 1.1.0
- Wikipedia 2.8.0
- Wikiquote 1.1.0
- Wikisource 1.1.0
- Wikispecies 1.1.0 
- Wikiversity 1.1.0
- Wikivoyage 1.1.0
- Wiktionary 1.1.0

P/S: Last time we got the gitmojis. Sad to see it gone...

## Acknowledgements
- [x] I read the [Presence Guidelines](https://github.com/PreMiD/Presences/blob/main/.github/CONTRIBUTING.md)
- [x] I linted the code by running `yarn format`
- [x] The PR title follows the repo's [commit conventions](https://github.com/PreMiD/Presences/blob/main/.github/COMMIT_CONVENTION.md)

## Changelog

- Update base script
  - Update metadata schema to 1.7
  - Change position to save `let`/`const` keyword (Bas950)
  - Adjust to support hiding certain presence data fields

- Wikimedia (MediaWiki codebase):
  - Use constants instead of getter functions on some parts
  - Rename variables for clarity
  - Avoid using template literals when it is not needed
  - Add buttons
  - Add toggle to hide buttons and timestamp
  - Only show main page details the main page is viewed
  - Use nullish coalescing operators

- Non-Wikimedia: Adjust codebase from Wikimedia

- Wikidata, Wikisource, Wiktionary: Change details on the main pages
- Wikipedia: Take over by changing the author
- Add alternative names

# PW codebase homogenization (individual)

> The title of this PR does not follow the repo's commit conventions

And you can't just do a simple rebase? Come on, man. You can't be serious.

For the full description of this PR, please see #6535.

## Screenshots

### Side-by-side

This section only demonstrates Wikipedia, but it should work on all of the presences, because of the same codebase.

| Image | Link visited |
| ----- | ------------ |
| ![](https://user-images.githubusercontent.com/11584103/181738862-56ad89cc-1830-4021-b7fa-f9eff0e3241c.png) | https://en.wikipedia.org/wiki/Apollo_4 (with buttons and timestamps) |
| ![](https://user-images.githubusercontent.com/11584103/181738886-dfe6c495-e40f-4f1e-8b68-8ec9b6ad8c5a.png) | https://en.wikipedia.org/wiki/Apollo_4 (with timestamps only) |
| ![](https://user-images.githubusercontent.com/11584103/181738908-deef1818-cfd0-4790-80c1-1dfad70218d6.png) | https://en.wikipedia.org/wiki/Apollo_4 (with buttons only) |
| ![](https://user-images.githubusercontent.com/11584103/181738933-cdcbf396-5b2b-4534-8435-88dee83ab560.png) | https://en.wikipedia.org/wiki/Apollo_4 (without buttons and timestamps) |

### Variations

| Image | Link visited |
| ----- | ------------ |
| ![](https://user-images.githubusercontent.com/11584103/181736412-800fa187-7464-4ef1-9de6-595179bb93c0.png) | https://en.wikipedia.org/wiki/Apollo_4 |
| ![](https://user-images.githubusercontent.com/11584103/181736420-af150a91-3b11-4ca9-a7ed-7f8f518a3349.png) | https://en.wiktionary.org/wiki/carnyx#English |
| ![](https://user-images.githubusercontent.com/11584103/181736423-a3b0a9c9-5173-476c-abb7-3c3cc22e1b56.png) | https://en.wikibooks.org/wiki/Zine_Making |
| ![](https://user-images.githubusercontent.com/11584103/181736429-9f6df004-0bb4-47f2-86da-9224a8b2170c.png) | https://en.wikisource.org/wiki/Popular_Science_Monthly/Volume_31/May_1887/Megalithic_Monuments_in_Spain_and_Portugal |
| ![](https://user-images.githubusercontent.com/11584103/181736434-df0caeee-0688-4f2d-9b7f-3d94c1d8fe6d.png) | https://en.wikinews.org/wiki/Ranil_Wickremesinghe_sworn_in_as_Sri_Lankan_President |
| ![](https://user-images.githubusercontent.com/11584103/181736437-c9819880-b5a4-46c8-9c09-ee239ae385b3.png) | https://en.wikiversity.org/wiki/Filmmaking_Basics/Formatting_the_Script [REJECTED] |
| ![](https://user-images.githubusercontent.com/11584103/181736441-fa0c87fb-c3b7-408e-b25b-1bf255a48dcc.png) | https://en.wikiversity.org/wiki/Filmmaking_Basics |
| ![](https://user-images.githubusercontent.com/11584103/181736453-f887e230-9d5f-4738-baed-c3dee0613650.png) | https://species.wikimedia.org/wiki/Pandion_haliaetus |
| ![](https://user-images.githubusercontent.com/11584103/181736458-b17e0452-369c-4119-86b6-3e3c41593442.png) | https://www.wikidata.org/wiki/Q107029237 |
| ![](https://user-images.githubusercontent.com/11584103/181736462-7a744f0c-c08f-48a9-9a7a-cbbcb694dfd4.png) | https://commons.wikimedia.org/wiki/File:Close_wing_Mud_puddl…tson,_1852)_%E2%80%93_Yellow_Jezebel_(Male)_WLB_IMG_2640.jpg |
| ![](https://user-images.githubusercontent.com/11584103/181736467-f87671a4-6b6a-45d7-9674-adcacb2af208.png) | https://en.wikivoyage.org/wiki/Farnborough |
| ![](https://user-images.githubusercontent.com/11584103/181736471-04363cba-0adc-43ac-85ae-75f0ab5c9d0f.png) | https://wikimediafoundation.org/news/2022/07/22/wikimedia-foundation-earns-accreditation-to-the-united-nations-economic-and-social-affairs-council-ecosoc/ |

----

# Non-PW codebase homogenization

## Description

Hello, everyone.

This PR is an accompaniment of the PR #xxxx which updates these presences with the same codebase. For more information, please see #xxxx. Relevant changelogs will be listed here.

This PR includes updates for the following presences:

- Fandom 1.3.0
- Miraheze 1.1.0

## Acknowledgements
- [x] I read the [Presence Guidelines](https://github.com/PreMiD/Presences/blob/main/.github/CONTRIBUTING.md)
- [x] I linted the code by running `yarn format`
- [x] The PR title follows the repo's [commit conventions](https://github.com/PreMiD/Presences/blob/main/.github/COMMIT_CONVENTION.md)

## Changelog

- Update base script
  - Update metadata schema to 1.7
  - Change position to save `let`/`const` keyword (Bas950)
  - Adjust to support hiding certain presence data fields

- Adjust codebase from Wikimedia
- Fandom: Update store page logo and thumbnail
- Fandom: Deprecate Fandom/Gamepedia migration code to support all Fandom wikis
- Fandom: Add support for login pages on auth.fandom.com

## Screenshots

### Side-by-side

This section only demonstrates Fandom, but it should work on all of the presences, because of the same codebase.

| Image | Link visited |
| ----- | ------------ |
| ![](https://user-images.githubusercontent.com/11584103/181751500-52f0a40f-598f-47af-8358-25140d4da9ad.png) | https://fridaynightfunking.fandom.com/wiki/Funkipedia_Mods_Wiki (with button and timestamp) |
| ![](https://user-images.githubusercontent.com/11584103/181751513-049f916e-2e18-43e4-b9ff-780160986b7d.png) | https://fridaynightfunking.fandom.com/wiki/Funkipedia_Mods_Wiki (with button only) |
| ![](https://user-images.githubusercontent.com/11584103/181751522-2ce359fb-5473-4026-a615-1336d542650d.png) | https://fridaynightfunking.fandom.com/wiki/Funkipedia_Mods_Wiki (with timestamps only) |
| ![](https://user-images.githubusercontent.com/11584103/181751537-6b976926-4118-4c61-9c10-382e624d8452.png) | https://fridaynightfunking.fandom.com/wiki/Funkipedia_Mods_Wiki (without button and timestamp) |

### Variations

| Image | Link visited |
| ![](https://user-images.githubusercontent.com/11584103/181751551-6dcd985b-3a84-4e4f-aa7b-07c1c221294c.png) | https://fridaynightfunking.fandom.com/wiki/Funkipedia_Mods_Wiki |
| ![](https://user-images.githubusercontent.com/11584103/181751552-c9771e82-8bbf-481a-9b2e-a36f6b507516.png) | https://fridaynightfunking.fandom.com/wiki/Plants_vs._Rappers |
| ![](https://user-images.githubusercontent.com/11584103/181751555-2cfa6c56-10e4-429a-98d1-d7bac4da6e99.png) | https://www.fandom.com/ |
| ![](https://user-images.githubusercontent.com/11584103/181751557-56baccd1-9806-4e4b-947f-f993511568a2.png) | https://terribletvshows.miraheze.org/wiki/Terrible_Shows_%26_Episodes_Wiki |
| ![](https://user-images.githubusercontent.com/11584103/181751559-e869cc83-f807-4d10-b090-b044975a3079.png) | https://terribletvshows.miraheze.org/wiki/Sonic_Underground |
| ![](https://user-images.githubusercontent.com/11584103/181751561-e5eca0c6-1c2c-415a-900f-97ed6c122f65.png) | https://www.miraheze.org/ |


---

# Wikia.org massacre

## Description

Wikia.org is now officially being merged to the Fandom domain (e.g. https://world-war-2.wikia.org to https://ww2-history.fandom.com), so this presence is now rendered useless.

I have no idea what message to use with this conventions, so here's my try. Tell me if I need to change it.

## Acknowledgements
- [x] I read the [Presence Guidelines](https://github.com/PreMiD/Presences/blob/main/.github/CONTRIBUTING.md)
- [x] I linted the code by running `yarn format`
- [x] The PR title follows the repo's [commit conventions](https://github.com/PreMiD/Presences/blob/main/.github/COMMIT_CONVENTION.md)


----

<!-- 
var images = ``.split("\n")

var links = ``.split("\n")

console.log(images.length, links.length, images.length === links.length)

images = images.map(value => value.replace(/\[.+\]/, "[]"))
var result = images.map((value, index) => {
	if (value !== "") return `| ${value} | ${links[index]} |`
})
console.log(result.join("\n"))
-->

---