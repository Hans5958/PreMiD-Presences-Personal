# [presence/service name]

## Description

## Images

### Side-by-side

### Variations

| Image | Link visited |
| ----- | ------------ |

----

# Multiple presences (05/06/2021)

## Description

Here's a PR that tackles a quite simple problem IMO. Somehow it took a while due to complications on my workspace, but it's all okay. This PR adds support of FandomMobile and future FandomDesktop skin, along with tackling some issues.

This PR resolves #3883 and is related to Hans5958/PreMiD-Presences-Personal#6

This PR includes updates to the following presences:

- Fandom (1.2.6)
- Gamepedia (1.2.6)

## Changelog

- Support FandomMobile and future FandomDesktop skin (Fandom, Gamepedia)
- Simplify Fandom/Gamepedia detection (Fandom, Gamepedia)
- Remove support for Community Central-specific namespaces (Fandom)
- Add support for more namespaces (Fandom, Gamepedia)
- Sync code for search page from Gamepedia
- Fix ESLint warnings and errors

## Images

All variations will give the same presence data, so to prove there are no smoke and mirrors, all screenshots are full-screen.

| Image | Link visited |
| ----- | ------------ |
| ![](https://user-images.githubusercontent.com/11584103/120887311-45f4ff00-c61c-11eb-8575-0a7760184cd5.png) | https://sonic.fandom.com/wiki/Miles_%22Tails%22_Prower |
| ![](https://user-images.githubusercontent.com/11584103/120887319-4c837680-c61c-11eb-8201-45d231d0c509.png) | https://sonic.fandom.com/wiki/Miles_%22Tails%22_Prower?useskin=fandomdesktop |
| ![](https://user-images.githubusercontent.com/11584103/120887322-4e4d3a00-c61c-11eb-91dd-46cfc0fa8b1d.png) | https://sonic.fandom.com/wiki/Miles_%22Tails%22_Prower?useskin=fandommobile |
| ![](https://user-images.githubusercontent.com/11584103/120887326-5016fd80-c61c-11eb-8a1f-f19a46810083.png) | https://minecraft.fandom.com/wiki/Java_Edition_1.16.5 |
| ![](https://user-images.githubusercontent.com/11584103/120887328-51482a80-c61c-11eb-86b2-6638b060605f.png) | https://minecraft.fandom.com/wiki/Java_Edition_1.16.5?useskin=fandomdesktop |
| ![](https://user-images.githubusercontent.com/11584103/120887329-53aa8480-c61c-11eb-8f5d-74c5ea9c2f11.png) | https://minecraft.fandom.com/wiki/Java_Edition_1.16.5?useskin=fandommobile |

----

# Multiple updates WMF (18/10/2020) 

## Description

This update contains bug fixes for all of the current Wikimedia Foundation wiki presences.

This PR includes updates for the following presences:

## Changelog

- Update base script
  - Update metadata schema to 1.3
  - Change position to save `let`/`const` keyword (@Bas950)
  - Avoid using startTimestamp when endTimestamp is used (@ririxidev)
- Change details on the main pages (Wikidata, Wikisource, Wiktonary)
- Add alternative names
- Take over by changing the author (Wikipedia)
- Change language code from "ar" to "ar_SA" (upstream)
- Add Irish description (upstream)
- Wikipedia: Update logo (upstream)
- Use `decodeURIComponent()` instead of `decodeURI()` for more correct title from the URL

## Images

| Image | Link visited |
| ----- | ------------ |



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