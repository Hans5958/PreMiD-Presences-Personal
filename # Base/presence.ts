var presence = new Presence({
	clientId: "662312595239469097",
})

var currentURL = new URL(document.location.href),
	currentPath = currentURL.pathname.slice(1).split("/"),
	browsingStamp = Math.floor(Date.now() / 1000), 
	presenceData: presenceData = {
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

/*

This is the anonymous function.
All code related to the presence are written here.

*/

})();

if (updateCallback.present) {
	presence.on("UpdateData", async () => {
		resetData()
		updateCallback.function()
		// console.log(`Presence output:\n\n${presenceData.details}\n${presenceData.state}`)
		presence.setActivity(presenceData)
	})
} else {
	presence.on("UpdateData", async () => {
		// console.log(`Presence output:\n\n${presenceData.details}\n${presenceData.state}`)
		presence.setActivity(presenceData)
	})
}

/**
 * Initialize/reset presenceData.
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

/**
 * Function definitions for logging-related things.
 */
var logHandler = {
	/**
	 * Handles not supported pages.
	 * @param isCritical If the URL is essential to the operation, this should be true, so it will output an error, not a warning.
	 */
	pageNotSupported(isCritical: boolean = false) {
		if (isCritical) console.error("Whoops. It seems that this page is not supported. \nPlease contact @Hans5958#0969 to request a support for this page.")
		else console.warn("It seems that this page is not fully supported. \nPlease contact @Hans5958#0969 to request a support for this page.")
		console.log(currentURL.href)
	},
	/**
	 * Handles fatal errors.
	 * @param error The error that it threw.
	 */
	fatalError(error: string) {
		console.groupEnd()
		console.error("Fatal error! Terminating.\nPlease report this problem to @Hans5958#0969.")
		console.groupCollapsed("Error log")
		console.log(currentURL.href)
		console.error(error)
		console.groupEnd()
	}
}

/**
 * Search for URL parameters.
 * @param urlParam The parameter that you want to know about the value.
 */
function getURLParam(urlParam: string) {
	return currentURL.searchParams.get(urlParam)
}