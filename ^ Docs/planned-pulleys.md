# [presence/service name]

## Preword

## Notes

## Images

### Side-by-side

### Variations

| Image | Link visited |
| ----- | ------------ |

----

# [presence/service name]

## Preword

## Changelog

- Update base script
  - Fix `currentPath` by also removing the last slash if required so it is consistent
  - Update how `resetData()` works so the fields that have been changed before are also included
  - Update metadata schema from 1.1

## Notes

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

# Wikipedia (2.7.2)

*See also: Hans5958/PreMiD-Presences-Personal#3*

## Preword

Here's an update for Wikipedia which includes changes I made on other Wikimedia wikis' presence.

## Notes

- Add support for topic pages (mostly unused)
- Add support for dif and compare pages
- Add implicit return type on updateCallback
- Add alternative names from various languages
- Change way to obtain main page link to solve names other than "Main page"

## Images

| Image | Link visited |
| ----- | ------------ |
| ![](https://user-images.githubusercontent.com/11584103/90961449-4e3bdd80-e4d3-11ea-88ee-076f5b0f1226.png) | https://www.wikipedia.org/ |
| ![](https://user-images.githubusercontent.com/11584103/90961450-4f6d0a80-e4d3-11ea-86aa-04d15cd6578d.png) | https://en.wikipedia.org/wiki/Main_Page |
| ![](https://user-images.githubusercontent.com/11584103/90961451-5005a100-e4d3-11ea-88d1-cceb4f26ac4d.png) | https://en.wikipedia.org/wiki/John_W._Beschter |
