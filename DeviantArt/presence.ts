var presence = new Presence({
	clientId: "662312595239469097",
	mediaKeys: false
})

var browsingStamp = Math.floor(Date.now() / 1000), 
	href = new URL(document.location.href),
	presenceData = {
		details: <string> 'In construction',
		state: <string> null,
		largeImageKey: <string> "lg",
		startTimestamp: <number> browsingStamp,
		endTimestamp: <number> null
	},
	updateCallback = {
		_function: null,
		get function() {
			return this._function;
		},
		set function(parameter){
			this._function = parameter
		},
		get present() {
			return this._function !== null
		}
	};

(() => { 

	/*

		Please note that it only supports www.deviantart.com.

		These domains will be supported in the future.
		- about.deviantart.com
		- shop.deviantart.com
		- groups.deviantart.com
		- forums.deviantart.com
		- www.deviantartsupport.com
		- eclipsefeedback.com

	*/

	var currentPath = "", forceUpdate = false, path = [""], presenceDataPlaced = {}

	if (document.querySelector("table#overhead") === null) var websiteTheme = "eclipse"
	else var websiteTheme = "old"

	if (document.querySelector("#group")) var profileType = "group"
	else var profileType = "user"

	updateCallback.function = () => {

		path = document.location.pathname.slice(1).split("/")
		if (currentPath !== document.location.pathname || forceUpdate) {
			currentPath = document.location.pathname
			try {
				if (path[0] === "") {	
					presenceData.details = "Viewing the home page"

				} else if (document.querySelector(".error-404") || document.querySelector("#error-404")) { 
					presenceData.details = "On a non-existent page"
					/* This needs to be on the top since the 404 errors has no fixed URL. */

				/* The functions below is only valid on the Eclipse theme. */
				
				} else if (path[0] === "deviations") {
					presenceData.details = "Viewing deviations"
					presenceData.state = path.slice(1).concat((new URL(document.location)).searchParams.get("order")).join(" > ").replace(/-/g, ' ').toLowerCase().split(' ').map(w => w.replace(w[0], w[0].toUpperCase())).join(' ')
					
				} else if (path[0] === "daily-deviations") {
					presenceData.details = "Viewing daily deviations"
					if (websiteTheme === "eclipse") presenceData.state = document.querySelector("#daily-deviation-picker").value
					else presenceData.state = document.querySelector(".dailyDevCurDate").textContent.split(", ").slice(1).join(", ")

				} else if (path[0] === "journals") {
					presenceData.details = "Viewing daily deviations"
					if (path[1]) presenceData.state = path[1].replace(path[1], path[1].toUpperCase())
					else presenceData.state = "All"
					
				} else if (path[0] === "status-updates") {
					presenceData.details = "Viewing status updates"

				} else if (path[0] === "polls") {
					presenceData.details = "Viewing polls"

				} else if (path[0] === "commissions") {
					presenceData.details = "Viewing commissions"
				
				/* The function below is valid on the Eclipse theme and the old theme. */

				} else if (path[0] === "tag") {
					presenceData.details = "Viewing a tag"
					presenceData.state = `#${path[1]}`

				} else if (path[0] === "notifications") {
					if (path[1] === "notes") presenceData.details = "Reading notes"
					if (path[1] === "watch") presenceData.details = "Viewing the watch list"
					else presenceData.details = "Reading notifications"
					/* Should I make it detailed, such as what section does the user sees? */
					
				} else if (path[0] === "settings") {
					presenceData.details = "Doing some settings"
					/* Should I also make it more detailed? */

				} else if (path[0] === "account") {
					presenceData.details = "Viewing the account settings"
					/* This might expose some stuff, because the page shows orders, points, and earnings. */

				} else if (path[0] === "core-membership") {
					presenceData.details = "Viewing a page"
					presenceData.state = "Core Membership"

				/* The function below is only valid on the old theme. */

				} else if (websiteTheme === "old" && document.querySelector(".newbrowse")) {
					presenceData.details = "Viewing deviations"
					var li = document.querySelectorAll(".browse-facet-category ul li")
					if (path[3]) presenceData.state = `${li[1].textContent} > ${li[2].textContent} > ${document.querySelector(".search-stats").textContent.trim().slice(7)} > `
					else if (path[2]) presenceData.state = `${li[1].textContent} > ${document.querySelector(".search-stats").textContent.trim().slice(7)} > `
					else if (path[1]) presenceData.state = `${document.querySelector(".search-stats").textContent.trim().slice(7)} > `
					else if (path[0]) presenceData.state = ''
					presenceData.state += document.querySelector(".browse-facet-order ul li .selected").textContent
					
				/* The functions below are vaild for users only. */
					
				} else if (path[1] === "art") {
					if (websiteTheme === "eclipse") {
						presenceData.details = document.querySelector("h1").textContent
					} else {
						presenceData.details =  document.querySelector("h1 .title").textContent
					}
					presenceData.state = getName()

				/* The function below are valid for users and groups. */

				} else if (path[1] === "gallery" || path[1] === "favourites") {
					if (path[1] === "gallery") presenceData.details = `Viewing a ${profileType}'s gallery`
					else presenceData.details = `Viewing a ${profileType}'s favourites`
					if (websiteTheme === "eclipse" && profileType === "user") {
						presenceData.state = `${document.querySelector("h2.uUWfu").textContent} by ${getName()}`
					} else {
						if (profileType === "group" && !path[2]) {
							presenceData.state = getName(true)
						} else {		
							if (!document.querySelector(".gallery .active")) presenceData.state = `${document.querySelector(".folder-title").textContent} by ${getName(true)}`
							else if (document.querySelector(".gallery .active").textContent.slice(1) === "Featured") presenceData.state = `Featured by ${getName(true)}`
							else if (document.querySelector(".gallery .active").textContent.slice(1) === "All") presenceData.state = `All by ${getName(true)}`
						}
					}

				/* The functions below are vaild for users only. */

				} else if (path[1] === "print") {
					presenceData.details =  document.querySelector("h1 .title").textContent
					presenceData.state = getName(true)

				} else if (path[1] === "prints") {
					presenceData.details = `Viewing a user's prints`
					presenceData.state = getName()

				} else if (path[1] === "posts") {	/* This part is only valid on the Eclipse theme. */
					const details = {
						"All": "Viewing a user's posts",
						"Journals": "Viewing a user's journals",
						"Status Updates": "Viewing a user's statuses",
						"Polls": "Viewing a user's polls"
					}
					presenceData.details = details[document.querySelector("._3xmU1 div a").textContent]
					presenceData.state = getName()

				} else if (path[1] === "journal") {
					if (path[2]) {
						if (websiteTheme === "eclipse") {
							presenceData.details = document.querySelector("._2-k1X").textContent
						} else {	/* This part is only valid on the old theme. */
							if (path[2] === "poll") document.querySelector("h2").textContent.substr(1, document.querySelector("h2").textContent.length - 2)
							else presenceData.details = document.querySelector("h1 .title").textContent
						}
					} else {	/* This part is only valid on the old theme. */
						presenceData.details = `Viewing a user's journals`
					}
					presenceData.state = getName()

				} else if (path[1] === "poll") {
					if (websiteTheme === "eclipse") {
						try {presenceData.details = document.querySelector("._1ddsf").textContent}
						catch {presenceData.details = document.querySelector(".gfMBk").textContent}
					} else {
						presenceData.details = document.querySelector("h2").textContent.substr(1, document.querySelector("h2").textContent.length - 2)
					}
					presenceData.state = getName()

				} else if (path[1] === "badges") {	/* This part is only valid on the old theme. (not quite sure) */
					if (path[2]) {
						presenceData.details = "Viewing a badge"
						presenceData.state = `${document.querySelector("h3").textContent} from ${getName()}`
					} else {
						presenceData.details = `Viewing a ${profileType}'s badges`
						presenceData.state = getName(true)
					}

				/* The functions below are valid for groups only. */

				} else if (path[1] === "aboutus") {
					presenceData.details = "Viewing a group's about page"
					presenceData.state = getName(true)
			
				} else if (path[1] === "blog") {
					presenceData.details = "Viewing a group's blog"
					presenceData.state = getName(true)

				/* The function below are valid for users and groups. */

				} else if (path[0] && !path[1]) {
					try {
					presenceData.details = `Viewing a ${profileType}'s profile`
					presenceData.state = getName(true)
					} catch {
						console.log("Whoops. Seems this page is not supported. Please contact Hans5958#0969 to request a support for this page.")
					}
					
				} else {
					console.log("Whoops. Seems this page is not supported. Please contact Hans5958#0969 to request a support for this page.")
				}
				
				presenceDataPlaced = presenceData
				forceUpdate = false

			} catch (error) {
				forceUpdate = true
				console.log(error)
			}

		} else {
			presenceData = presenceDataPlaced
		}
	}

	function getName(override: boolean = false) {
		if (websiteTheme === "eclipse" && !override) {
			return document.querySelector("._2Lxll").textContent
		} else {
			try {return document.querySelector("h1 .author .u .u").textContent}
			catch {return document.querySelector("h1 .u .u").textContent}
		}
	}

	/*

	- "react" type, update every url change if possible
	- need to make two types, old and eclipse
	- deviation view based on youtube, others adjusting

	*/

})();

if (updateCallback.present) {
	presence.on("UpdateData", async () => {
		resetData()
        updateCallback.function();
		cleanData()
        presence.setActivity(presenceData);
	})
} else {
	cleanData()
	presence.on("UpdateData", async () => {
		presence.setActivity(presenceData)
	})
}

/**
 * Initialize presenceData
 */
function resetData() {
	presenceData = {
		details: <string> 'In construction',
		state: <string> null,
		largeImageKey: <string> "lg",
		startTimestamp: <number> browsingStamp,
		endTimestamp: <number> null
	};
}

var test = {}

/**
 * Cleans presenceData
 */
function cleanData() {
	Object.keys(presenceData).forEach(key => {
		if (presenceData[key] === null) delete presenceData[key]
	})
	if (test !== presenceData) {
		console.log(presenceData)
		test = presenceData
	}
}