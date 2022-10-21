const presence = new Presence({
	clientId: "662312595239469097"
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
	/*
	
	This is the anonymous function.
	All code related to the presence are written here.
	
	*/
})()

const defaultData = {...presenceData}
presence.on("UpdateData", async () => {
	resetData(defaultData)
	updateCallback()
	if (!(await presence.getSetting('time'))) delete presenceData.startTimestamp
	if (!(await presence.getSetting('buttons'))) delete presenceData.buttons
	presence.setActivity(presenceData)
})
