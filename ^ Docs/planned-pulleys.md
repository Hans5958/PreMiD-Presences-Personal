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

# Wikimedia (03/10/2021) 

## Description

Here's a long overdue of Project Wikimedia. For the sake of completeness, here's a catch-all presence for other Wikimedia domains. These does not include Wikipedia and the others. Compared to other domains, the scope is wider than the other wikis. 

Along with the new presence is the experiment of using the MediaWiki configuration values exposed in `mw.config`. It's my first time of me using `presence.getPageletiable()`, and my first impressions is not quite good, but I get it done nonetheless.

Notes:
- Should I use Wikimedia or Wikimedia Foundation? Wikimedia refers to the movement, and the Wikmedia Foundation refers to the foundation that's doing the foundation.
- All domains that have been added has been tested so it works properly. Using Regex does not gurantee support.

## Images

### Side-by-side
| ![](https://user-images.githubusercontent.com/11584103/135749944-4a8ead39-f0b4-4251-be54-fb3d97bdd6f6.png)
 | https://meta.wikimedia.org/ |

### Variations

| Image | Link visited |
| ----- | ------------ |
| ![](https://user-images.githubusercontent.com/11584103/135749804-6767e8ba-921b-4c0c-af05-97909daa166b.png) | https://www.wikimedia.org/ |
| ![](https://user-images.githubusercontent.com/11584103/135749806-9f684ed2-ada0-4d51-9d46-9705a2e20200.png) | https://wikimediafoundation.org/ |
| ![](https://user-images.githubusercontent.com/11584103/135749808-2b4212bd-d4ce-4360-92a9-00e53147de61.png) | https://wikimediafoundation.org/wikipedia20/ |
| ![](https://user-images.githubusercontent.com/11584103/135750962-2ce2284a-a263-4848-a417-37cdeaaee03e.png) | https://diff.wikimedia.org |
| ![](https://user-images.githubusercontent.com/11584103/135750963-9546efaa-af82-445d-af9b-deea722e7cf4.png) | https://diff.wikimedia.org/2021/10/03/join-us-celebrate-the-eureka-effects-of-the-3rd-edition-of-wiki-loves-folklore/ |
| ![](https://user-images.githubusercontent.com/11584103/135750964-62125c6c-39cf-4f7a-a47e-3d342758f3c1.png) | https://techblog.wikimedia.org/ |
| ![](https://user-images.githubusercontent.com/11584103/135750965-6b83bb9c-94b5-4048-9524-2ac1972399c1.png) | https://techblog.wikimedia.org/2021/09/28/how-we-deploy-code/ |
| ![](https://user-images.githubusercontent.com/11584103/135749816-56a91684-f73c-4a33-99cc-d670f0d60e3a.png) | https://lists.wikimedia.org/postorius/lists/ |
| ![](https://user-images.githubusercontent.com/11584103/135749818-ee815775-54cc-4bb5-855d-042fac1bf767.png) | https://lists.wikimedia.org/postorius/lists/wikimedia-l.lists.wikimedia.org/ |
| ![](https://user-images.githubusercontent.com/11584103/135749819-2c1dada0-c91b-4a07-908e-1d19abd1fe30.png) | https://stats.wikimedia.org/#/all-projects |
| ![](https://user-images.githubusercontent.com/11584103/135749821-9d60bfea-2685-4c3b-9e58-c1d0be671e46.png) | https://stats.wikimedia.org/#/all-projects/contributing/edits/normal|bar|2-year|~total|monthly |
| ![](https://user-images.githubusercontent.com/11584103/135749825-e5a647a8-b066-4c27-a0af-13b8029bae18.png) | https://phabricator.wikimedia.org/ |
| ![](https://user-images.githubusercontent.com/11584103/135749828-8f0a0ab9-cf53-4425-838a-94286f5449f8.png) | https://phabricator.wikimedia.org/T292358 |
| ![](https://user-images.githubusercontent.com/11584103/135749831-a6a24316-7471-49c4-b660-cee986d3709a.png) | https://phab.wmflabs.org/ |
| ![](https://user-images.githubusercontent.com/11584103/135749833-7cbf2c2b-e836-4926-b414-4cd06f124d0d.png) | https://xtools.wmflabs.org/ |
| ![](https://user-images.githubusercontent.com/11584103/135749838-30d2f071-a217-4cc7-918b-d149a87e7de0.png) | https://xtools.wmflabs.org/authorship/en.wikipedia.org/Discord%20%28software%29/ |
| ![](https://user-images.githubusercontent.com/11584103/135749843-ebc19818-5ddd-4a53-89e9-9291970ec657.png) | https://dumps.wikimedia.org/ |
| ![](https://user-images.githubusercontent.com/11584103/135749844-f316623c-1d93-48bd-945a-0d89a2602aaf.png) | https://donate.wikimedia.org/ |
| ![](https://user-images.githubusercontent.com/11584103/135749846-ded61f61-8784-4228-9141-e4a82b6342d9.png) | https://meta.wikimedia.org/ |
| ![](https://user-images.githubusercontent.com/11584103/135749847-31ba8280-55f3-4af4-9a17-29e8d9666ca2.png) | https://meta.wikimedia.org/wiki/Growing_Wikimedia |
| ![](https://user-images.githubusercontent.com/11584103/135749848-012602b2-0af8-4b9a-bff7-47ef9cfd5977.png) | https://incubator.wikimedia.org/ |
| ![](https://user-images.githubusercontent.com/11584103/135749849-a4c6a336-acc3-40f9-a7ef-f13c1cab32fa.png) | https://wikitech.wikimedia.org/ |
| ![](https://user-images.githubusercontent.com/11584103/135749850-15a25f51-437b-43b8-8520-73a626fa9669.png) | https://www.mediawiki.org/ |
| ![](https://user-images.githubusercontent.com/11584103/135749852-7a89f8c2-ae8b-4fe5-8866-33adfb2174bb.png) | https://wikimania.wikimedia.org/ |
| ![](https://user-images.githubusercontent.com/11584103/135749853-c19b562b-d700-494f-a913-da736f82ee73.png) | https://foundation.wikimedia.org/ |
| ![](https://user-images.githubusercontent.com/11584103/135749855-d8ae3639-c2c7-4f0b-9874-cf02a5803abf.png) | https://wikispore.wmflabs.org/ |
| ![](https://user-images.githubusercontent.com/11584103/135749856-7f82ad17-d477-401f-a8f2-52abb3b2475b.png) | https://outreach.wikimedia.org/ |
| ![](https://user-images.githubusercontent.com/11584103/135749857-b94ee862-caac-4ddd-958c-b6776caafb65.png) | https://strategy.wikimedia.org/ |


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