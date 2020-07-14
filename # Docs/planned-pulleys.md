# [presence/service name]

## Preword

## Notes

## Images

### Side-by-side

### Variations

| Image | Link visited |
| ----- | ------------ |

---

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

---

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

# TrackMania Exchange (1.0.1)

## Preword

Here's an update for the TrackMania Exchange presence, which is done to avoid confusion for the new [TrackmaniaExchange](https://trackmania.exchange), as well to introduce new supported pages and bug fixes.

## Changelog

- Update base script
  - Fix `currentPath` by also removing the last slash if required so it is consistent
  - Update how `resetData()` works so the fields that have been changed before are also included
  - Update metadata schema from 1.1
- Add alternative name for TMX (`TM-Exchange`)
- Edit description to avoid confusion for both TMX
- Add support for more pages

## Notes

- Regarding altnames, am I doing it right?
- Are newlines work on the description?

## Images

| Image | Link visited |
| ----- | ------------ |
| ![](https://user-images.githubusercontent.com/11584103/87421075-91677e80-c600-11ea-99e5-28b6ba361d6e.png) | https://tmnforever.tm-exchange.com/ |
| ![](https://user-images.githubusercontent.com/11584103/87421079-9298ab80-c600-11ea-949b-c76c60b0174b.png) | https://tmnforever.tm-exchange.com/main.aspx?action=trackshow&id=8238264#auto |

---

# ManiaExchange (1.0.1)

## Preword

Here's an update for the ManiaExchange presence, which is done to add support for the new [TrackmaniaExchange](https://trackmania.exchange), as well to introduce new supported pages and bug fixes.

## Changelog

- Update base script
  - Fix `currentPath` by also removing the last slash if required so it is consistent
  - Update how `resetData()` works so the fields that have been changed before are also included
  - Update metadata schema from 1.1
- Add support for TrackmaniaExchange (a TMX variation, but for the 2020 Trackmania)
- Edit description to avoid confusion for both TMX
- Swap the small image with the large image for some parts of the website
- Add support for more pages

## Notes

- Are newlines work on the description?

## Images

| Image | Link visited |
| ----- | ------------ |
| ![](https://user-images.githubusercontent.com/11584103/87420673-e5be2e80-c5ff-11ea-8e06-2eac99573d07.png) | https://trackmania.exchange |
| ![](https://user-images.githubusercontent.com/11584103/87420675-e656c500-c5ff-11ea-956f-ba21603409e8.png) | https://trackmania.exchange/maps/1476/zero |
| ![](https://user-images.githubusercontent.com/11584103/87420676-e656c500-c5ff-11ea-9421-97b8b73198dc.png) | https://trackmania.exchange/forums |
| ![](https://user-images.githubusercontent.com/11584103/87420677-e6ef5b80-c5ff-11ea-8913-4b6a7a5ef746.png) | https://item.mania.exchange |
| ![](https://user-images.githubusercontent.com/11584103/87420681-e787f200-c5ff-11ea-9689-1973d159d962.png) | https://tmtube.mania-exchange.com/ |
| ![](https://user-images.githubusercontent.com/11584103/87420682-e8208880-c5ff-11ea-8d27-76d5527d366e.png) | https://mania-exchange.com |

# Wikipedia (2.8.0)

*See also: Hans5958/PreMiD-Presences-Personal#3*

*I got questions on [the notes section](#notes), I kindly ask to answer them.*

## Preword

It's been a while since the last update for the Wikipedia presence, and I think there still room of improvement for the presence. As someone who had experience on editing the wiki, there are still a lot of things that is missing, such as different details for the different namespaces (Talk:, Wikipedia:, User:, etc.), incomplete support for other Wikipedia wikis than English Wikipedia, and *subjectively* a bad implementation for the presence. 

With the issues in mind, I have decided to try to fix the aforementioned issues, as well as adding features and fixing bugs for the frequent Wikipedia editors and readers.

## Changelog

- Add my base and do significant refactor
- Add different details for different namespaces
- Add details for login, sign up, and search
- Add language code on the state/details for other languages than English
- Change method for detecting what page is on, from using URL paths to using contents on the page
- Fix potential bug when parsing foreign characters
- Add (or fix?) support for the www homepage (https://www.wikipedia.org)

## Notes

- Let me know if the version number 2.8.0 is wrong.
- I'm also planning to do the whole Wikimedia wikis, not just Wikipedia. Check Hans5958/PreMiD-Presences-Personal#3 if you want.

## Images

| Image | Link visited |
| ----- | ------------ |
| ![](https://user-images.githubusercontent.com/11584103/87441671-8ec75200-c61d-11ea-9b0b-36a34b2ec541.png) | https://www.wikipedia.org/ |
| ![](https://user-images.githubusercontent.com/11584103/87441396-427c1200-c61d-11ea-8979-3501efd9d167.png) | https://en.wikipedia.org/wiki/Main_Page |
| ![](https://user-images.githubusercontent.com/11584103/87442097-13b26b80-c61e-11ea-98d4-4003e0c89ca1.png) | https://en.wikipedia.org/wiki/COVID-19_pandemic |
| ![](https://user-images.githubusercontent.com/11584103/87442090-10b77b00-c61e-11ea-80b2-b4d29b99b31a.png) | https://en.wikipedia.org/wiki/Talk:COVID-19_pandemic |
| ![](https://user-images.githubusercontent.com/11584103/87441401-4445d580-c61d-11ea-9e84-220783eec251.png) | https://en.wikipedia.org/wiki/Wikipedia:WikiProject_COVID-19 |
| ![](https://user-images.githubusercontent.com/11584103/87441404-44de6c00-c61d-11ea-8d6a-22e3e0993b56.png) | https://en.wikipedia.org/wiki/Wikipedia:WikiProject_COVID-19/Task_forces (bottom part will read "Wikipedia:WikiProject COVID-19/Task forces") |
| ![](https://user-images.githubusercontent.com/11584103/87441405-45770280-c61d-11ea-8048-4eed1e116a5f.png) | https://en.wikipedia.org/wiki/Wikipedia_talk:WikiProject_COVID-19 |
| ![](https://user-images.githubusercontent.com/11584103/87441409-460f9900-c61d-11ea-81cf-9981760191c0.png) | https://en.wikipedia.org/w/index.php?title=Special:UserLogin |
| ![](https://user-images.githubusercontent.com/11584103/87442098-144b0200-c61e-11ea-9920-b85384c2eb5b.png) | https://en.wikipedia.org/w/index.php?title=Special:CreateAccount |
| ![](https://user-images.githubusercontent.com/11584103/87441410-46a82f80-c61d-11ea-945b-77437d91bb6c.png) | https://en.wikipedia.org/w/index.php?&sort=relevance&search=…file=advanced&fulltext=1&advancedSearch-current=%7B%7D&ns0=1 |
| ![](https://user-images.githubusercontent.com/11584103/87441415-4740c600-c61d-11ea-9035-cfefab43b2cd.png) | https://en.wikipedia.org/wiki/User:Hans5958 |
| ![](https://user-images.githubusercontent.com/11584103/87441418-47d95c80-c61d-11ea-8d1b-13bc5c7f70fa.png) | https://id.wikipedia.org/wiki/Halaman_Utama |
| ![](https://user-images.githubusercontent.com/11584103/87441422-4871f300-c61d-11ea-84cc-092354051f72.png) | https://id.wikipedia.org/wiki/Pandemi_COVID-19 |
| ![](https://user-images.githubusercontent.com/11584103/87441428-49a32000-c61d-11ea-94d9-3a8e1939d6ac.png) | https://id.wikipedia.org/wiki/Bahasa_Indonesia |
| ![](https://user-images.githubusercontent.com/11584103/87441438-4c057a00-c61d-11ea-97c0-ea6330c7cf0e.png) | https://id.wikipedia.org/wiki/Pengguna:Hans5958 |
| ![](https://user-images.githubusercontent.com/11584103/87441430-4a3bb680-c61d-11ea-9068-faa0dfa6fe78.png) | https://de.wikipedia.org/wiki/Wikipedia:Hauptseite |
| ![](https://user-images.githubusercontent.com/11584103/87441436-4b6ce380-c61d-11ea-86a0-76ce466d1f5c.png) | https://de.wikipedia.org/wiki/Deutsche_Sprache |
| ![](https://user-images.githubusercontent.com/11584103/87441442-4d36a700-c61d-11ea-9d43-846e52edcdb5.png) | https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8 |
| ![](https://user-images.githubusercontent.com/11584103/87441485-56c00f00-c61d-11ea-9ec8-5b8bd57860d0.png) | https://ja.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E8%AA%9E |
