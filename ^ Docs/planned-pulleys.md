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

Here's a PR that supposed to be simple, but then finished with lots of things changed, added, and fixed. It's so much that I think this is a minor bump. At least I got this thing done, unlike Yandere Simulator.

This PR includes updates to the following presences:

- ManiaExchange (1.1.0)
- TrackMania Exchange (1.1.0)

## Changelog

- Update base script
  - Change position to save `let`/`const` keyword (@Bas950)
- Optimize runtime on some parts by only set static string once
- Add support for "News Archive" page
- Improve error page detection
- Fix error on detecting track creator username (ManiaExchange)
- Revamp code on "Leaderboard" page (ManiaExchange)
- Avoid using startTimestamp when endTimestamp is used (ManiaExchange) (@ririxidev)
- Add support for blog.mania.exchange (ManiaExchange)
- Fix presence not working on MX portal pages (ManiaExchange)
- Add support for logos and signage on MX portal (ManiaExchange)
- Improve error page detection (ManiaExchange)
- Add small image for TM-Tube Archive and the blog (ManiaExchange)
- Add support for "Track Replay Info" page (TrackMania Exchange)
- Fix presence string on "Leaderboards" slicing too much (TrackMania Exchange)
- Remove unneeded equality check (TrackMania Exchange)
- Update ID prefix for TMNF and TMUF (TrackMania Exchange)

## Images

| Image | Link visited |
| ----- | ------------ |
| ![](https://user-images.githubusercontent.com/11584103/120961518-2e3a8980-c788-11eb-9302-21596b64b796.png) | https://www.tm-exchange.com/ |
| ![](https://user-images.githubusercontent.com/11584103/120961529-3397d400-c788-11eb-8a14-c030e22ffa3a.png) | https://tmnforever.tm-exchange.com/ |
| ![](https://user-images.githubusercontent.com/11584103/120961535-34c90100-c788-11eb-98e5-32d4b707fbdf.png) | https://tmnforever.tm-exchange.com/main.aspx?action=trackshow&id=8735422#auto |
| ![](https://user-images.githubusercontent.com/11584103/120961546-385c8800-c788-11eb-93ee-43859e222713.png) | https://tmnforever.tm-exchange.com/main.aspx?action=trackreplayshow&id=8735422 |
| ![](https://user-images.githubusercontent.com/11584103/120961558-3db9d280-c788-11eb-91c8-5044e08d5f40.png) | https://nations.tm-exchange.com/ |
| ![](https://user-images.githubusercontent.com/11584103/120961560-3eeaff80-c788-11eb-8085-a0f5045ee312.png) | https://nations.tm-exchange.com/main.aspx?action=trackshow&id=2167077#auto |
| ![](https://user-images.githubusercontent.com/11584103/120961571-427e8680-c788-11eb-980a-ded6eddbba11.png) | https://united.tm-exchange.com/ |
| ![](https://user-images.githubusercontent.com/11584103/120961594-50cca280-c788-11eb-9d60-cee0fb92c1cf.png) | https://united.tm-exchange.com/main.aspx?action=trackshow&id=6023253#auto |
| ![](https://user-images.githubusercontent.com/11584103/120961614-5aeea100-c788-11eb-9b17-06eec7c16e1e.png) | https://mania-exchange.com/ |
| ![](https://user-images.githubusercontent.com/11584103/120961617-5c1fce00-c788-11eb-873f-af4b0e14ffdd.png) | https://trackmania.exchange/ |
| ![](https://user-images.githubusercontent.com/11584103/120961622-5de99180-c788-11eb-900d-0aaa4420ee00.png) | https://trackmania.exchange/maps/29090/90mc-5eudoxus |
| ![](https://user-images.githubusercontent.com/11584103/120961638-63df7280-c788-11eb-9547-a75064d63681.png) | https://tm.mania-exchange.com/ |
| ![](https://user-images.githubusercontent.com/11584103/120961643-6641cc80-c788-11eb-8a48-bf4c2efbab5c.png) | https://tm.mania-exchange.com/maps/195017/corsica-sunset-v3-esl |
| ![](https://user-images.githubusercontent.com/11584103/120961677-79ed3300-c788-11eb-841e-5c0c5c9a7c25.png) | https://tmtube.mania-exchange.com/ |
| ![](https://user-images.githubusercontent.com/11584103/120961681-7b1e6000-c788-11eb-9ac1-704bceff0762.png) | https://tmtube.mania-exchange.com/view/15867 |
| ![](https://user-images.githubusercontent.com/11584103/120961686-7ce82380-c788-11eb-99fb-91735b1cfe65.png) | https://blog.mania.exchange/ |
| ![](https://user-images.githubusercontent.com/11584103/120961689-7eb1e700-c788-11eb-9a6f-4850a39f55e2.png) | https://blog.mania.exchange/posts/disclose-past-cheated-replays-tmx |

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