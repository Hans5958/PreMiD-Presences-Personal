# [presence/service name]

## Description

## Images

### Side-by-side

### Variations

| Image | Link visited |
| ----- | ------------ |

----

# Multiple presences (09/04/2021)

<h3>Reviewers, please read!</h3>

## Description

Well, this is awkward. 

In a recent turn of event, [the people on Fandom decided that it would be a good idea to migrate Gamepedia wikis to the Fandom domain](https://community.fandom.com/wiki/User_blog:MisterWoodhouse/The_Future_of_Gamepedia). This means that any wikis on https://gamepedia.com (like https://minecraft.gamepedia.com) is going to reside on https://fandom.com (like https://minecraft.fandom.com). SEO improvement is their main reason, if you believe.

<details><summary>Google's Featured Snippet summary, because it somehow sums up perfectly.</summary>

Today, we have a big announcement. After nearly two years of working together to bring Fandom and Gamepedia wikis onto one platform, we will be starting to migrate all Gamepedia wikis to a Fandom.com domain in early 2021.
</details>

So, I need to do a bug fix, even if it's quite late. But, when fixing it, I need to choose between two ways to do it.

1. Let the Gamepedia presence read fandom.com and keep the Fandom presence from reading it, and vice versa.
   This is the choice that I think makes more sense for the users. Both of these services are separate, and has been separated on the store since a while ago, so it would be confusing if it got merged. Also, this going to be confusing 
   The downside is that I need to code it so the Gamepedia presence only runs on Gamepedia wikis, and the Fandom presence only runs on Fandom wikis. I have also made sure that it won't run the "event listener" part of the code (or whatever is `presence.on("UpdateData", async () => {})` called). This is untested, because nobody can load two presences at once, but theoretically it's going to be fine.
2. Deprecate Gamepedia presence in favor of the Fandom presence.
   This make sense developer-facing, but it just seems off. As I have mentioned above about the problem of merging it, it's just going to be weird if a Gamepedia wiki will appear as Fandom on Discord, because both of them are different, and I can't just change the client ID as I wish. Also, looking at the architecture of the store system, I think deprecating Gamepedia is going to be a pain in the arse.

After these consideration, I decided to take the first way. I hope it is going to be fine, and it is also fine to you, reviewers.

By the way, I have also fixed my fork-copying code, so I hope it doesn't get bumped the next time `SE` gets executed.

This PR includes updates to the following presences:

- Fandom (1.2.2)
- Gamepedia (1.2.2)

*Do these need a minor bump (1.3.0) or a patch bump (1.2.2)? Please tell me in the comments below.*

## Changelog

- Update base script
  - Only start updating when there is presence data
- Do not run Fandom presence code on Gamepedia wikis... (Fandom)
- ...and vice versa (Gamepedia)
- Remove `presence.info()` debugging lines (Gamepedia)
- Adjust RegEx and code to accommodate domain change (Gamepedia)
- Sync code from Fandom (Gamepedia)

## Images

| Image | Link visited |
| ----- | ------------ |
| ![](https://user-images.githubusercontent.com/11584103/114028388-a0831080-98a2-11eb-9d75-d7b8502ba229.png) | https://www.fandom.com/ |
| ![](https://user-images.githubusercontent.com/11584103/114028396-a24cd400-98a2-11eb-8753-00a7328ca512.png) | https://cavestory.fandom.com/wiki/Quote |
| ![](https://user-images.githubusercontent.com/11584103/114028400-a2e56a80-98a2-11eb-842e-3b75fdcbe923.png) | https://www.gamepedia.com/ |
| ![](https://user-images.githubusercontent.com/11584103/114028405-a37e0100-98a2-11eb-80ec-9888bb7b5bae.png) | https://minecraft.fandom.com/wiki/Minecraft_Plus%21 |

----

# Multiple updates WMF (18/10/2020) 

## Description

This update contains bug fixes for all of the current Wikimedia Foundation wiki presences.

This PR includes updates for the following presences:

## Changelog

- Update base script
  - Update metadata schema to 1.3
  - Only start updating when there is presence data
- Change details on the main pages (Wikidata, Wikisource, Wiktonary)
- Add alternative names
- Take over by changing the author (Wikipedia)
- Change language code from "ar" to "ar_SA" (upstream)
- Add Irish description (upstream)
- Wikipedia: Update logo (upstream)

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