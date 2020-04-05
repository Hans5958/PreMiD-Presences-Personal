var presence = new Presence({
	clientId: "609364070684033044",
})

var currentURL = new URL(document.location.href),
	currentPath = currentURL.pathname.slice(1).split("/"),
	browsingStamp = Math.floor(Date.now() / 1000),
	href = new URL(document.location.href),
	presenceData = {
		details: <string> "Viewing an unsupported page",
		state: <string> undefined,
		largeImageKey: <string> "lg",
		startTimestamp: <number> browsingStamp,
		endTimestamp: <number> undefined
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

	let title: string, 
		actionResult = href.searchParams.get("action"),
		titleFromURL = () => {
			let raw: string
			if (href.pathname.startsWith("/index.php")) raw = href.searchParams.get("title")
			else raw = href.pathname.slice(1)
			if (raw.includes("_")) return raw.replace(/_/g, " ")
			else return raw
		}

	try {
		title = document.querySelector("h1#firstHeading").textContent
	} catch (e) {
		title = titleFromURL()
	}

	// try { 
	// 	sitename = document.querySelector("meta[property='og:site_name']").content
	// } catch (e) {
	// 	sitename = null
	// }

	if (document.querySelector("title").textContent.split(" - ").length === 1) {
		presenceData.state = "Main Page | Home"
		delete presenceData.details
	} else if (actionResult == "history") {
		presenceData.details = "Viewing revision history"
		presenceData.state = title
	} else if (actionResult == "edit") {
		presenceData.details = "Editing a page"
		presenceData.state = title
	} else {
		presenceData.details = "Reading a page"
		presenceData.state = title
	}

	presenceData.startTimestamp = browsingStamp
	// presenceData.state += " | " + sitename

})()

if (updateCallback.present) {
	presence.on("UpdateData", async () => {
		resetData()
		updateCallback.function()
		presence.setActivity(presenceData)
	})
} else {
	presence.on("UpdateData", async () => {
		presence.setActivity(presenceData)
	})
}

/**
 * Initialize presenceData.
 */
function resetData() {
	currentURL = new URL(document.location.href),
	currentPath = currentURL.pathname.slice(1).split("/"),
	presenceData = {
		details: <string> "Viewing an unsupported page",
		state: <string> undefined,
		largeImageKey: <string> "lg",
		startTimestamp: <number> browsingStamp,
		endTimestamp: <number> undefined
	}
}