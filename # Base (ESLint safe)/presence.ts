var presence = new Presence({
	clientId: "662312595239469097"
})

var currentURL = new URL(document.location.href),
	currentPath = currentURL.pathname.slice(1).split("/"),
	browsingStamp = Math.floor(Date.now() / 1000),
	presenceData: presenceData = {
		details: "Viewing an unsupported page",
		largeImageKey: "lg",
		startTimestamp: browsingStamp
	},
	updateCallback = {
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
function resetData(): void {
	currentURL = new URL(document.location.href)
	currentPath = currentURL.pathname.slice(1).split("/")
	presenceData = {
		details: "Viewing an unsupported page" as string,
		state: undefined as string,
		largeImageKey: "lg" as string,
		startTimestamp: browsingStamp as number,
		endTimestamp: undefined as number
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
	pageNotSupported(isCritical = false): void {
		if (isCritical)
			console.error("Whoops. It seems that this page is not supported. \nPlease contact @Hans5958#0969 to request a support for this page.")
		else
			console.warn("It seems that this page is not fully supported. \nPlease contact @Hans5958#0969 to request a support for this page.")
		console.log(currentURL.href)
	},
	/**
	 * Handles fatal errors.
	 * @param error The error that it threw.
	 */
	fatalError(error: string): void {
		console.groupEnd()
		console.error(
			"Fatal error! Terminating.\nPlease report this problem to @Hans5958#0969."
		)
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
function getURLParam(urlParam: string): string {
	return currentURL.searchParams.get(urlParam)
}

((): void => {
	/*
	
	This is the anonymous function.
	All code related to the presence are written here.
	
	*/
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
