const presence = new Presence({
	clientId: "662312595239469097"
})

let currentURL = new URL(document.location.href), 
	currentPath = currentURL.pathname.replace(/^\/|\/$/g, "").split("/")
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
const resetData = (defaultData: PresenceData = {
	details: "Viewing an unsupported page",
	largeImageKey: "lg",
	startTimestamp: browsingStamp
}): void => {
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

if (updateCallback.present) {
	const defaultData = {...presenceData}
	presence.on("UpdateData", async () => {
		resetData(defaultData)
		updateCallback.function()
		presence.setActivity(presenceData)
	})
} else {
	presence.on("UpdateData", async () => {
		presence.setActivity(presenceData)
	})
}
