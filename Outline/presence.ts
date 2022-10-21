const presence = new Presence({
	clientId: "715602476249776239"
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
	if (document.querySelector("outline-not-found")) {
		presenceData.details = "On a non-existent page"
	} else if (currentPath[0] === "terms.html") {
		presenceData.details = "Reading the terms"
	} else if (currentPath[0] === "privacy.html") {
		presenceData.details = "Reading the privacy policy"
	} else if (currentPath[0] === "dmca.html") {
		presenceData.details = "Reading the DMCA page"
	} else if (currentPath[0] === "report.html") {
		presenceData.details = "Reporting an article"
	} else {
		let loadedPath: string, forceUpdate = false, presenceDataPlaced: PresenceData = {}
		updateCallback = (): void => {
			if ((loadedPath !== currentURL.pathname) || forceUpdate) {
				loadedPath = currentURL.pathname
				try {
					if (document.querySelector("outline-not-found")) {
						presenceData.details = "On a non-existent page"
					} else if (currentPath[0] === "") {
						presenceData.details = "On the home page"
					} else {
						presenceData.details = document.querySelector("h1").textContent
						;[ presenceData.state ] = document.querySelector(".publication").textContent.trim().split(" ›")
					}
				} catch (error) {
					forceUpdate = true
					resetData()
					presenceData.details = "Loading..."				
				}
				presenceDataPlaced = presenceData
				forceUpdate = false
			} else {
				presenceData = presenceDataPlaced
			}
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
