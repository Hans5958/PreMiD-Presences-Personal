const presence = new Presence({
	clientId: "721986767322087464"
})

let currentURL = new URL(document.location.href), 
	currentPath = currentURL.pathname.slice(1).split("/")
const browsingStamp = Math.floor(Date.now() / 1000)
let presenceData: PresenceData = {
		details: "Viewing an unsupported page",
		largeImageKey: "lg",
		startTimestamp: browsingStamp
	}
const updateCallback = {
		_function: null as Function,
		get function(): Function {
			return this._function
		},
		set function(parameter) {
			this._function = parameter
		},
		get present(): boolean {
			return this._function !== null
		}
	}

/**
 * Initialize/reset presenceData.
 */
const resetData = (): void => {
	currentURL = new URL(document.location.href)
	currentPath = currentURL.pathname.slice(1).split("/")
	presenceData = {
		details: "Viewing an unsupported page",
		largeImageKey: "lg",
		startTimestamp: browsingStamp
	}
}

/**
 * Search for URL parameters.
 * @param urlParam The parameter that you want to know about the value.
 */
const getURLParam = (urlParam: string): string => {
	return currentURL.searchParams.get(urlParam)
}

((): void => {

	if (currentURL.hostname === "tm-exchange.com" || currentURL.hostname === "www.tm-exchange.com") {
		presenceData.details = "On the home page"

	} else if (currentURL.hostname === "blog.tm-exchange.com") {
		if (currentPath[0] === "post") {
			presenceData.details = "Reading a blog post"
			presenceData.state = document.querySelector(".WindowHeader1").textContent
		} else if (currentPath[0] === "archive.aspx") {
			presenceData.details = "Viewing the blog archive"
		} else {
			presenceData.details = "Viewing the blog"
		}

	} else { 

		let pageType: string, idPrefix = "ctl03"

		/*
	
		This part figures out the page type. 
		There are three ways for getting it's type.
	
		1. From the "action" parameter on the current URL.
		2. From the "action" parameter on the URL located on the "External Link" part on the top left corner.
		3. From the "Location" part on the top left corner, specifically the bolded part.
	
		*/
	
		if (getURLParam("action") !== null && getURLParam("action") !== "auto#auto") {
			pageType = getURLParam("action")
		} else if (document.querySelector(".BookmarkCell a") !== null) {
			currentURL = new URL(document.querySelector(".BookmarkCell a").textContent)
			pageType = getURLParam("action")
		} else {
			const locationType = {
				"Home": "home",
				"Login": "login", // action guessed
				"Registration": "register", // action guessed
				"Lost Login": "forget", // action guessed
				"Track Info": "trackshow",
				"Search Tracks": "tracksearch",
				"Nadeo Tracks": "tracksearch",
				"Your AOI": "tracksearch",
				"Track Signs": "tracksigns",
				"Track Upload": "trackuploadtrack",
				"Submit Replays": "recordmassupload",
				"Leaderboards": "userrecords",
				"Your Tracks": "tracksearch",
				"Your Replays": "tracksearch",
				"Your Downloads": "tracksearch",
				"PlayPal": "playpal",
				"PlayPal On-Line": "playpalonline",
				"TrackBeta": "trackbeta",
				"Find Users": "usersearch",
				"User Info": "usershow",
				"User Packs": "userpacks", // action guessed
				"Your Account": "usershow",
				"Send Private Message": "postupdate"
			}
			try {pageType = locationType[document.querySelector(".NavigatorCell b").textContent]}
			catch(e) {pageType = null}
		}

		if (document.querySelector(".NavigatorCell b").textContent === "Login") pageType = "login"

		/*
	
		This parts gives suffix to the top text of the activity (aka details), to differentiate the different sites on the network.
	
		*/
	
		switch (currentURL.host) {
			case "united.tm-exchange.com":
				presenceData.smallImageKey = "united"
				presenceData.smallImageText = "United"
				idPrefix = "_ctl3"
				break
			case "tmnforever.tm-exchange.com":
				presenceData.smallImageKey = "nforever"
				presenceData.smallImageText = "Nations Forever"
				break
			case "nations.tm-exchange.com":
				presenceData.smallImageKey = "nations"
				presenceData.smallImageText = "Nations"
				break
			case "sunrise.tm-exchange.com":
				presenceData.smallImageKey = "sunrise"
				presenceData.smallImageText = "Sunrise"
				break
			case "original.tm-exchange.com":
				presenceData.smallImageKey = "original"
				presenceData.smallImageText = "Original"
				break
		}

		/*
	
		This part sets the details to be given to PreMID.
	
		*/
			
		if (pageType === "home") {	
			presenceData.details = "On the home page"

		} else if (pageType === "login") {
			presenceData.details = "Signing in"

		} else if (pageType === "register") {
			presenceData.details = "Registering an account"

		} else if (pageType === "forget") {
			presenceData.details = "Figuring out his password"

		} else if (pageType === "trackshow") {
			presenceData.details = document.querySelector(`#${idPrefix}_ShowTrackName`).textContent
			presenceData.state = document.querySelector("tr.WindowTableCell1:nth-child(3) > td:nth-child(2) > a:nth-child(3)").textContent

		} else if (pageType === "tracksearch") {
			let searchSummary: string
			if (document.querySelector(`#${idPrefix}_ShowSummary > b:nth-child(1)`).textContent === "tracks")	searchSummary = document.querySelector(`#${idPrefix}_ShowSummary`).textContent.slice(15, this.length - 4)
			else searchSummary = document.querySelector(`#${idPrefix}_ShowSummary`).textContent.slice(8, this.length - 4)
			presenceData.details = "Searching for a track"
			if (document.querySelector(".TextFilter")) presenceData.state = `${document.querySelector(".TextFilter").textContent.slice(9, this.length - 1)}, ${searchSummary}`
			else presenceData.state = searchSummary[0].toUpperCase() + searchSummary.slice(1)

		} else if (pageType === "tracksigns") {
			presenceData.details = "Viewing track signs"

		} else if (pageType === "trackuploadtrack") {
			presenceData.details = "Uploading a track"

		} else if (pageType === "recordmassupload") {
			presenceData.details = "Submitting replays"

		} else if (pageType === "userrecords") {
			const searchSummary = document.querySelector(`#${idPrefix}_ShowSummary`).textContent.slice(27, this.length - 4)
			presenceData.details = "Viewing the leaderboards"
			if ((document.querySelector(`#${idPrefix}_GetUser`) as HTMLInputElement).value) presenceData.state = `${(document.querySelector(`#${idPrefix}_GetUser`) as HTMLInputElement).value}, ${searchSummary}`
			else presenceData.state = searchSummary[0].toUpperCase() + searchSummary.slice(1)

		} else if (pageType === "forumshow" || pageType === "forumsshow") {
			presenceData.details = "Viewing the forums"
			if (pageType === "forumshow") presenceData.state = document.querySelector(".WindowTitle").textContent.trim()
			
		} else if (pageType === "threadshow") {
			presenceData.details = "Viewing a topic"
			presenceData.state = document.querySelector(`#${idPrefix}_ShowSubject`).textContent

		} else if (pageType === "playpal") {
			presenceData.details = "Viewing PlayPal"

		} else if (pageType === "playpalonline") {
			presenceData.details = "Viewing PlayPal Online"

		} else if (pageType === "trackbeta") {
			presenceData.details = "Viewing TrackBeta"

		} else if (pageType === "usersearch") {
			const searchSummary = document.querySelector(`#${idPrefix}_ShowSummary`).textContent.slice(15, this.length - 4)
			presenceData.details = "Searching for a user"
			if (document.querySelector(`#${idPrefix}_ShowName`)) presenceData.state = `${document.querySelector(`#${idPrefix}_ShowName`).textContent}, ${searchSummary}`
			else presenceData.state = searchSummary[0].toUpperCase() + searchSummary.slice(1)

		} else if (pageType === "usershow") {
			presenceData.details = "Viewing a user's info"
			presenceData.state = document.querySelector(`#${idPrefix}_ShowLoginId`).textContent

		} else if (pageType === "userpacks") {
			const searchSummary = document.querySelector(`#${idPrefix}_ShowSummary`).textContent.slice(20, this.length - 4)
			presenceData.details = "Searching for a user pack"
			if (document.querySelector(`#${idPrefix}_ShowName`)) presenceData.state = `${document.querySelector(`#${idPrefix}_ShowName`).textContent}, ${searchSummary}`
			else presenceData.state = searchSummary[0].toUpperCase() + searchSummary.slice(1)

		} else if (pageType === "postupdate") {
			presenceData.details = "Sending a private message"
		
		} else if (pageType === "trackpackshow") {
			presenceData.details = "Viewing a track pack"
			presenceData.state = `${document.querySelector(`#${idPrefix}_ShowPackName`).textContent} by ${document.querySelector("#Table7 > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > a:nth-child(3)").textContent}`
		}
	
	}

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