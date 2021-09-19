# [presence/service name]

## Description

## Images

### Side-by-side

### Variations

| Image | Link visited |
| ----- | ------------ |

----

# Multiple presences (07/06/2021)

## Description

This PR is quite overdue, because I got university stuff to tackle first, but here it is. There is a critical change that I need to do in response to [the path structure change on two of the most used branches of the service](https://tmnforever.tm-exchange.com/newssearch). Along with it are some other changes and bugfixes. Enjoy, and I apologise.

This PR includes updates to the following presences:

- ManiaExchange (1.1.2)
- TrackMania Exchange (1.1.1)

## Changelog

- Add new mentions of TMNF-X and TMUF-X on the presence (TrackMania Exchange)
- Support another path for error pages
- Support new path structure for TMNF-X and TMUF-X (TrackMania Exchange)
- Fix wrong action types (TrackMania Exchange)

## Images

| Image | Link visited |
| ----- | ------------ |
| ![](https://user-images.githubusercontent.com/11584103/133931904-59f4f905-4a0a-4a3f-a51c-e4c2c2709e47.png) | https://tmnforever.tm-exchange.com/ |
| ![](https://user-images.githubusercontent.com/11584103/133931907-210cd268-82e2-4848-b76d-d8f1f7f66fa4.png) | https://tmnforever.tm-exchange.com/trackshow/8183124 |
| ![](https://user-images.githubusercontent.com/11584103/133931909-ad2966ab-4bdf-4904-ba2f-6c03afc57fd9.png) | https://united.tm-exchange.com/ |
| ![](https://user-images.githubusercontent.com/11584103/133931911-79fbaf62-16df-4a13-80ea-662378348fcf.png) | https://united.tm-exchange.com/trackshow/6136240 |

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