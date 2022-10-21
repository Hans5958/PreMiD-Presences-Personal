const presence = new Presence({
	clientId: "731472884337475596"
})

const browsingStamp = Math.floor(Date.now() / 1000)
let currentURL = new URL(document.location.href), 
	currentPath = currentURL.pathname.replace(/^\/|\/$/g, "").split("/"),
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
	currentPath = currentURL.pathname.replace(/^\/|\/$/g, "").split("/")
	presenceData = {...defaultData}
}

((): void => {
	
	let title: string

	const titleFromURL = (): string => {
		const raw = currentPath.slice(1).join("/")
		return decodeURIComponent(raw.replace(/_/g, " "))
	}

	try {
		title = document.querySelector("h1.firstHeading span").textContent
	} catch (e) {
		title = titleFromURL()
	}

	if (currentPath[0] === "") {
		presenceData.details = "On the main page"
	} else if (document.querySelector(".error_content")) {	
		presenceData.details = "On a non-existent page"
	} else if (title) {
		presenceData.details = "Reading a wiki page"
		presenceData.state = title
		if (currentPath[0] !== "en") presenceData.state += ` (${currentPath[0]})`
	} else {
		presenceData.details = "Viewing a page"
		presenceData.state = document.title.replace(" - Wikiwand", "")
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
