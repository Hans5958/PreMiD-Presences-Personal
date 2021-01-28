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

Here's one of the biggest update waves for this year from me. I might be busy in the next months, so I need to get this done sooner or later.

This PR updates all presence by me except from the Wikimedia presences. Few of them might be minor, but some consists of major bug fixes and new page support. There's just a heck of a lot of improvements from the last time I updated them. I hope I don't miss some new requirements and features on this repository/project. 

Except that button feature. That might be included in another PR when later, many presences are using it.

Wikimedia presences will be updated in the future.

This PR includes updates to the following presences:

- DeviantArt (1.2.0)
- Fandom (1.2.0)
- Gamepedia (1.2.0)
- GeoGuessr (1.2.6)
- ManiaExchange (1.2.6)
- Outline (1.0.3)
- TrackMania Exchange (1.0.3)
- Typeracer (1.1.8)
- Wikiwand (1.0.2)

## Changelog

- Update base script
  - Fix `currentPath` by also removing the last slash if required so it is consistent
  - Update how `resetData()` works so the fields that have been changed before are also included
  - Update metadata schema to 1.3
  - Avoid using `Function` for types
- Add missing index signatures (TrackMania Exchange, GeoGuessr, Fandom, Gamepedia, Typeracer)
- Use `Presence` console functions instead of console log functions (DeviantArt)
- Implement settings for some parts (DeviantArt)
- Sync code based on Wikipedia (adds support for search, diff, improved code, etc) (Fandom, Gamepedia)
- Add support for more namespaces (Fandom, Gamepedia)
- Remove `getTimestamps()` function in favor of native `getTimestampsfromMedia()` function (Fandom)
- Fix bug where main pages with namespace values other than 0 and 1 works differently (Gamepedia)
- Fix equality check on path arrays (DeviantArt, GeoGuessr, Outline)
- Fix bug where presence not working due to multiple domains merging with the main domain (DeviantArt)
- Remove unused code of old theme due to it being deprecated (DeviantArt)
- Fix bug where presence not working when site name can't be found (Fandom, Gamepedia)
- Add support when looking categories on discussion forum (Fandom)
- Simplify code for general page (GeoGuessr, Wikiwand)
- Fix bug where presence not working on track pages due to a design change (ManiaExchange)
## Images

### Side-by-side

This section is required because of the settings implementation.

| Image | Link visited |
| ----- | ------------ |
| ![2021-01-25_22-07-19](https://user-images.githubusercontent.com/11584103/106142205-c950a080-61a3-11eb-8c01-1a70a7977fd4.png) | https://www.deviantart.com/settings/identity |
| ![2021-01-25_22-09-02](https://user-images.githubusercontent.com/11584103/106142215-cbb2fa80-61a3-11eb-99dd-0bf299e1a00f.png) | https://chat.deviantart.com/chat/devart |

### Variations

| Image | Link visited |
| ----- | ------------ |
| ![](https://user-images.githubusercontent.com/11584103/106137891-f732e680-619d-11eb-8b94-141dbd0c3e18.png) | https://www.deviantart.com/ |
| ![](https://user-images.githubusercontent.com/11584103/106137900-fac66d80-619d-11eb-829d-651b3413468f.png) | https://www.deviantart.com/settings/identity |
| ![](https://user-images.githubusercontent.com/11584103/106137902-fb5f0400-619d-11eb-93b9-7c340228deca.png) | https://chat.deviantart.com/chat/devart |
| ![](https://user-images.githubusercontent.com/11584103/106137904-fbf79a80-619d-11eb-8a31-7cc00d4e85a0.png) | https://www.deviantart.com/forum/ |
| ![](https://user-images.githubusercontent.com/11584103/106137905-fd28c780-619d-11eb-814f-f6032cbc67f4.png) | https://www.deviantart.com/about/policy/privacy/  |
| ![](https://user-images.githubusercontent.com/11584103/106137944-0d40a700-619e-11eb-961f-3bc6212bbc53.png) | https://www.fandom.com/ (put this first later) |
| ![](https://user-images.githubusercontent.com/11584103/106137927-087bf300-619e-11eb-9360-2539221fd99b.png) | https://community.fandom.com/wiki/Community_Central |
| ![](https://user-images.githubusercontent.com/11584103/106137931-09ad2000-619e-11eb-9470-c53ad34714a1.png) | https://community.fandom.com/f |
| ![](https://user-images.githubusercontent.com/11584103/106137933-0a45b680-619e-11eb-9685-686aed501563.png) | https://community.fandom.com/f?catId=3031493781749762997 |
| ![](https://user-images.githubusercontent.com/11584103/106137937-0ade4d00-619e-11eb-80bc-4b53ee6391a0.png) | https://community.fandom.com/f/p/4400000000002067143 |
| ![](https://user-images.githubusercontent.com/11584103/106137940-0b76e380-619e-11eb-94dd-d8be37caa83d.png) | https://community.fandom.com/wiki/Special:Search?search=University&fulltext=Search |
| ![](https://user-images.githubusercontent.com/11584103/106137941-0ca81080-619e-11eb-93de-3127fb2f7b70.png) | https://community.fandom.com/wiki/Special:Statistics |
| ![](https://user-images.githubusercontent.com/11584103/106138047-35300a80-619e-11eb-9ec6-9f13b3ef34ce.png) | https://community.fandom.com/wiki/Special:Search?search=University&fulltext=Search |
| ![](https://user-images.githubusercontent.com/11584103/106138052-36613780-619e-11eb-814c-90f1ec986efb.png) | https://cavestory.fandom.com/wiki/Quote |
| ![](https://user-images.githubusercontent.com/11584103/106138055-36f9ce00-619e-11eb-857c-06a832bd2147.png) | https://cavestory.fandom.com/wiki/Quote?veaction=edit |
| ![](https://user-images.githubusercontent.com/11584103/106138059-37926480-619e-11eb-951b-6eb41521b3fe.png) | https://cavestory.fandom.com/wiki/Quote?action=history |
| ![](https://user-images.githubusercontent.com/11584103/106137980-1b8ec300-619e-11eb-8cb2-16905d6142c0.png) | https://www.gamepedia.com/ |
| ![](https://user-images.githubusercontent.com/11584103/106137982-1cbff000-619e-11eb-90ec-f7fb69932ada.png) | https://minecraft.gamepedia.com/Minecraft_Wiki |
| ![](https://user-images.githubusercontent.com/11584103/106137987-1df11d00-619e-11eb-9617-fb32a1c2f2e3.png) | https://minecraft.gamepedia.com/UserProfile:Hans5958 |
| ![](https://user-images.githubusercontent.com/11584103/106137990-1e89b380-619e-11eb-83ef-b7710e00797a.png) | https://minecraft.gamepedia.com/Redstone_Dust |
| ![](https://user-images.githubusercontent.com/11584103/106137993-1f224a00-619e-11eb-9135-030018ea438b.png) | https://minecraft.gamepedia.com/Redstone_Dust?action=history |
| ![](https://user-images.githubusercontent.com/11584103/106137994-20537700-619e-11eb-823b-0d03eda87e0c.png) | https://minecraft.gamepedia.com/Special:Search?search=Bedrock&fulltext=1 |
| ![](https://user-images.githubusercontent.com/11584103/106138066-3b25eb80-619e-11eb-8674-dc5bdc209ca9.png) | https://minecraft.gamepedia.com/Redstone_Dust?veaction=edit |
| ![](https://user-images.githubusercontent.com/11584103/106138090-437e2680-619e-11eb-93ef-896e29be8d59.png) | https://www.geoguessr.com/ |
| ![](https://user-images.githubusercontent.com/11584103/106138094-4547ea00-619e-11eb-9527-e1c5f4f7fc8e.png) | https://www.geoguessr.com/free |
| ![](https://user-images.githubusercontent.com/11584103/106138097-45e08080-619e-11eb-8644-6a3cde6fc235.png) | https://www.geoguessr.com/game/[gameid] |
| ![](https://user-images.githubusercontent.com/11584103/106138143-57298d00-619e-11eb-9d5c-d346116a08eb.png) | https://www.outline.com/ |
| ![](https://user-images.githubusercontent.com/11584103/106138161-5b55aa80-619e-11eb-9eda-844b219191c5.png) | https://play.typeracer.com/ |
| ![](https://user-images.githubusercontent.com/11584103/106138162-5bee4100-619e-11eb-9b93-4f8045dc2061.png) | https://play.typeracer.com/ (playing) |
| ![](https://user-images.githubusercontent.com/11584103/106138164-5d1f6e00-619e-11eb-9b02-0868647a3128.png) | https://www.wikiwand.com/ |
| ![](https://user-images.githubusercontent.com/11584103/106138169-5db80480-619e-11eb-9ae6-b51b828d5d04.png) | https://www.wikiwand.com/en/GameStop |
| ![](https://user-images.githubusercontent.com/11584103/106138174-5e509b00-619e-11eb-802a-288a873c3647.png) | https://www.wikiwand.com/id/GameStop |
| ![](https://user-images.githubusercontent.com/11584103/106138178-5f81c800-619e-11eb-932d-d2e1fc922683.png) | https://www.wikiwand.com/news |
| ![](https://user-images.githubusercontent.com/11584103/106138183-601a5e80-619e-11eb-8ab7-79df43191e9b.png) | https://mania.exchange/ |
| ![](https://user-images.githubusercontent.com/11584103/106138186-60b2f500-619e-11eb-8b70-8ee4521ae308.png) | https://tm.mania-exchange.com/ |
| ![](https://user-images.githubusercontent.com/11584103/106138191-614b8b80-619e-11eb-9c00-754ddd97f183.png) | https://tm.mania-exchange.com/maps/42034/stadium-a01 |
| ![](https://user-images.githubusercontent.com/11584103/106138194-627cb880-619e-11eb-8fcd-f54ea07f7b81.png) | https://tm-exchange.com/ |
| ![](https://user-images.githubusercontent.com/11584103/106138195-63154f00-619e-11eb-93da-d5d056c5a8ea.png) | https://tmnforever.tm-exchange.com/ |
| ![](https://user-images.githubusercontent.com/11584103/106138200-63ade580-619e-11eb-8482-68321ce4fad4.png) | https://tmnforever.tm-exchange.com/main.aspx?action=trackshow&id=2233#auto |


<!-- https://www.deviantart.com/
https://www.deviantart.com/settings/identity
https://chat.deviantart.com/chat/devart
https://www.deviantart.com/forum/
https://www.deviantart.com/about/policy/privacy/ 

https://community.fandom.com/wiki/Community_Central
https://community.fandom.com/f
https://community.fandom.com/f?catId=3031493781749762997
https://community.fandom.com/wiki/Special:Search?search=University&fulltext=Search
https://community.fandom.com/wiki/Special:Statistics
https://www.fandom.com/ (put this first later)

https://www.gamepedia.com/
https://minecraft.gamepedia.com/Minecraft_Wiki
https://minecraft.gamepedia.com/UserProfile:Hans5958
https://minecraft.gamepedia.com/Redstone_Dust
https://minecraft.gamepedia.com/Redstone_Dust?action=history
https://minecraft.gamepedia.com/Special:Search?search=Bedrock&fulltext=1

https://community.fandom.com/wiki/Special:Search?search=University&fulltext=Search
https://cavestory.fandom.com/wiki/Quote
https://cavestory.fandom.com/wiki/Quote?veaction=edit
https://cavestory.fandom.com/wiki/Quote?action=history

https://minecraft.gamepedia.com/Redstone_Dust?veaction=edit

https://www.geoguessr.com/
https://www.geoguessr.com/free
https://www.geoguessr.com/game/[gameid]

https://www.outline.com/

https://play.typeracer.com/
https://play.typeracer.com/ (playing)

https://www.wikiwand.com/
https://www.wikiwand.com/en/GameStop
https://www.wikiwand.com/id/GameStop
https://www.wikiwand.com/news

https://mania.exchange/
https://tm.mania-exchange.com/
https://tm.mania-exchange.com/maps/42034/stadium-a01

https://tm-exchange.com/
https://tmnforever.tm-exchange.com/
https://tmnforever.tm-exchange.com/main.aspx?action=trackshow&id=2233#auto

-->


----

# Multiple updates WMF (18/10/2020) 

## Preword

This update contains bug fixes for all of the current Wikimedia Foundation wiki presences.

This PR includes updates for the following presences:



## Changelog

- Change details on the main pages (Wikidata, Wikisource, Wiktonary)

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