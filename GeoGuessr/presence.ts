const presence = new Presence({
	clientId: "654906151523057664"
})

const browsingStamp = Math.floor(Date.now() / 1000)
let currentURL = new URL(document.location.href), 
	currentPath = currentURL.pathname.replace(/^\/|\/$|\/index\.html$|.html$/g, "").split("/"),
	presenceData: PresenceData = {
		details: "Viewing an unsupported page",
		largeImageKey: "lg",
		startTimestamp: browsingStamp,
		buttons: [
			{
				label: "View Page",
				url: window.location.href,
			}
		],
	},
	updateCallback: () => void = () => void {}

/**
 * Initialize/reset presenceData.
 */
const resetData = (defaultData: PresenceData): void => {
	currentURL = new URL(document.location.href)
	currentPath = currentURL.pathname.replace(/^\/|\/$|\/index\.html$|.html$/g, "").split("/")
	presenceData = {...defaultData}
}

((): void => {

	let loadedPath: string,
		presenceDataPlaced: PresenceData = {},
		forceUpdate = false

	updateCallback = (): void => {

		if ((loadedPath !== currentURL.pathname) || forceUpdate) {

			loadedPath = currentURL.pathname

			if (currentPath[0] !== "game") forceUpdate = false
			
			if (currentPath[0] === "") {
				presenceData.details = "On the home page"
			} else if (currentPath[0] === "game") {
				forceUpdate = true
				presenceData.details = document.querySelector(".game-status[data-qa=map-name] .game-status__body").textContent
				if (document.querySelector(".result")) {
					presenceData.state = `${Number(document.querySelector(".game-status[data-qa=round-number] .game-status__body").textContent.split(" / ")[0]) + 1} of 5, ${document.querySelector(".game-status[data-qa=score] .game-status__body").textContent} points`
					if (document.querySelector(".game-status[data-qa=round-number] .game-status__body").textContent.split(" / ")[0] === "5") {
						presenceData.state = `Finished, ${document.querySelector(".game-status[data-qa=score] .game-status__body").textContent} points`
					}
				} else {
					presenceData.state = `${document.querySelector(".game-status[data-qa=round-number] .game-status__body").textContent.split(" / ")[0]} of 5, ${document.querySelector(".game-status[data-qa=score] .game-status__body").textContent} points`
				}
			} else if (currentPath[0] === "maps" && !currentPath[1]) {
				presenceData.details = "Looking for a map"
			} else if (currentPath[0] === "maps") {
				if (document.querySelector(".map-block__title")) {
					presenceData.details = "Viewing a map"
					presenceData.state = document.querySelector(".map-block__title").textContent
				} else {
					presenceData.details = "Looking for a map"
				}
			} else if (currentPath[0] === "user") {
				presenceData.details = "Viewing a user profile"
				presenceData.state = document.querySelector(".profile-summary__nick").textContent
			} else if (currentPath[0] === "me") {
				if (currentPath[2] === undefined) {
					presenceData.details = "Viewing their own profile"
				} else {
					const pageNames: {[index: string]: string} = {
						settings: "Settings",
						leagues: "Leagues",
						activities: "Activities",
						current: "Ongoing games",
						likes: "Favorite maps",
						badges: "Badges",
						maps: "My maps",
						"map-maker": "Map Maker"
					}
					presenceData.details = "Viewing a personal page"
					presenceData.state = pageNames[currentURL.pathname.split("/")[2]]
				}
			} else if (currentPath[0] === "signin") {
				presenceData.details = "Signing in"
			} else if (currentPath[0] === "signup") {
				presenceData.details = "Registering an account"
			} else {
				if (document.title === "GeoGuessr - Let's explore the world!") forceUpdate = true			
				else {
					forceUpdate = false
					presenceData.details = "Viewing a page"
					presenceData.state = document.title.replace(" - GeoGuessr", "")
				} 
			}

			presenceDataPlaced = presenceData
			
		} else {
			presenceData = presenceDataPlaced
		}
	}
	
})() 

const defaultData = {...presenceData}
presence.on("UpdateData", async () => {
	resetData(defaultData)
	updateCallback()
	if (!(await presence.getSetting('time'))) delete presenceData.startTimestamp
	if (!(await presence.getSetting('buttons'))) delete presenceData.buttons
	presence.setActivity(presenceData)
})
