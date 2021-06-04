# [presence/service name]

## Description

## Images

### Side-by-side

### Variations

| Image | Link visited |
| ----- | ------------ |

----

# Multiple presences (11/04/2021)

## Description

Well, it looks that my first attempt on resolving this issue kind of failed. Here's the second one, along with additional additions that are astonishingly overlooked.

By the way, I need to wrap the entire code in an if statement, so that's why the changes looked a lot. [This is the commit that I made on my side](https://github.com/Hans5958/PreMiD-Presences-Personal/commit/1bb39bcebab078759503f9236b6e9f0382d08cbb).

This PR includes updates to the following presences:

- Fandom (1.2.3)
- Gamepedia (1.2.3)

## Changelog

- Change method of early termination to fix critical bug where Fandom and Gamepedia presence can't run at the same time
- Add language code on the state/details for other languages than English (feature from WP)
- Revert feature "updating when there is presence data"
- Fix regex to only allow select Gamepedia domain (Gamepedia)
- Use `decodeURIComponent()` instead of `decodeURI()` for more correct title from the URL

## Images

| Image | Link visited |
| ----- | ------------ |
| ![](https://user-images.githubusercontent.com/11584103/114367476-acbee480-9ba6-11eb-9082-af2dc7ce3b39.png) | https://www.fandom.com/ |
| ![](https://user-images.githubusercontent.com/11584103/114367482-ae88a800-9ba6-11eb-9ec3-1765efe685f0.png) | <https://nier.fandom.com/wiki/NieR_Replicant_ver.1.22474487139...> |
| ![](https://user-images.githubusercontent.com/11584103/114367491-b0526b80-9ba6-11eb-9272-24f1d52a438c.png) | https://www.gamepedia.com/ |
| ![](https://user-images.githubusercontent.com/11584103/114368150-530aea00-9ba7-11eb-9afd-d9a7203221e3.png) | https://minecraft.fandom.com/wiki/Java_Edition_1.16.5 |

----

# Multiple updates WMF (18/10/2020) 

## Description

This update contains bug fixes for all of the current Wikimedia Foundation wiki presences.

This PR includes updates for the following presences:

## Changelog

- Update base script
  - Update metadata schema to 1.3
  - Change position to save `let`/`const` keyword (@Bas950)
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