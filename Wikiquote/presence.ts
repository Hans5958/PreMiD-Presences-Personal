const presence = new Presence({
	clientId: "733216877240647690"
})

const browsingStamp = Math.floor(Date.now() / 1000)
let currentURL = new URL(document.location.href), 
	presenceData: PresenceData = {
		details: "Viewing an unsupported page",
		largeImageKey: "lg",
		startTimestamp: browsingStamp
	}
const updateCallback = {
		_function: () => void {} as () => void,
		get function(): () => void {
			return this._function
		},
		set function(parameter) {
			this._function = parameter
		},
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
	presenceData = {...defaultData}
}

/**
 * Search for URL parameters.
 * @param urlParam The parameter that you want to know about the value.
 */
const getURLParam = (urlParam: string): string => {
	return currentURL.searchParams.get(urlParam)
}

const prepare = async (): Promise<void> => {

	if (currentURL.hostname === "www.wikiquote.org") {
		presenceData.details = "On the home page"

	} else {

		const mwConfig = await presence.getPageletiable('mw"]["config"]["values')
		
		const action: string = mwConfig.wgAction
		const actionFromURL = (): string => getURLParam("action") || getURLParam("veaction") || "view"
		const titleFromConfig: string = decodeURIComponent(mwConfig.wgPageName.replace(/_/g, " "))

		const title = document.querySelector("h1")?.textContent.trim() || titleFromConfig
		const lang: string = mwConfig.wgContentLanguage || currentURL.hostname.split(".")[0]

		/**
		 * Returns details based on the namespace.
		 * @link https://en.wikiquote.org/wiki/Help:Namespace
		 */
		const namespaceDetails = (): string => {
			const details: {[index: string]: string} = {
				"-2": "Viewing a media",
				"-1": "Viewing a special page",
				0: "Reading an article",
				1: "Viewing a talk page",
				2: "Viewing a user page",
				3: "Viewing a user talk page",
				4: "Viewing a project page",
				5: "Viewing a project talk page",
				6: "Viewing a file",
				7: "Viewing a file talk page",
				8: "Viewing an interface page",
				9: "Viewing an interface talk page",
				10: "Viewing a template",
				11: "Viewing a template talk page",
				12: "Viewing a help page",
				13: "Viewing a help talk page",
				14: "Viewing a category",
				15: "Viewing a category talk page",
				100: "Viewing a portal",
				101: "Viewing a portal talk page",
				828: "Viewing a module",
				829: "Viewing a module talk page",
				2300: "Viewing a gadget",
				2301: "Viewing a gadget talk page",
				2302: "Viewing a gadget definition page",
				2303: "Viewing a gadget definition talk page",
				2600: "Viewing a topic"
			}
			const canonicalNamespace = mwConfig.wgCanonicalNamespace.replace(/_/g, " ")
			return details[mwConfig.wgNamespaceNumber] || `Viewing a/an ${canonicalNamespace} page`
		}
		
		//
		// Important note:
		//
		// When checking for the current location, avoid using the URL.
		// The URL is going to be different in other languages.
		// Use the elements on the page or the config instead.
		//

		if (mwConfig.wgIsMainPage && action === "view") {
			presenceData.details = "On the main page"
		} else if (document.querySelector("#wpLoginAttempt")) {
			presenceData.details = "Logging in"
		} else if (document.querySelector("#wpCreateaccount")) {
			presenceData.details = "Creating an account"
		} else if (document.querySelector(".searchresults")) {
			presenceData.details = "Searching for a page"
			presenceData.state = (document.querySelector("input[type=search]") as HTMLInputElement).value
		} else if (action === "history") {
			presenceData.details = "Viewing revision history"
			presenceData.state = titleFromConfig
		} else if (getURLParam("diff")) {
			presenceData.details = "Viewing difference between revisions"
			presenceData.state = titleFromConfig
		} else if (getURLParam("oldid")) {
			presenceData.details = "Viewing an old revision of a page"
			presenceData.state = titleFromConfig
		} else if (document.querySelector("#ca-ve-edit") || getURLParam("veaction")) { 
			presenceData.state = title + (title.toLowerCase() === titleFromConfig.toLowerCase() ? '' : ` (${titleFromConfig})`)
			updateCallback.function = (): void => {
				if (actionFromURL().startsWith("edit")) {
					presenceData.details = "Editing a page"
				} else {
					presenceData.details = namespaceDetails()
				}
			}
		} else {
			if (action === "edit") {
				presenceData.details = document.querySelector("#ca-edit") ? "Editing a page" : "Viewing source"
				presenceData.state = titleFromConfig
			} else {
				presenceData.details = namespaceDetails()
				presenceData.state = title + (title.toLowerCase() === titleFromConfig.toLowerCase() ? '' : ` (${titleFromConfig})`)
			}
		}

		if (lang !== "en") {
			if (presenceData.state) presenceData.state += ` (${lang})`
			else presenceData.details += ` (${lang})`
		}

	}

	presenceData.buttons = [
		{
			label: "View Page",
			url: window.location.href,
		},
	]

}

(async (): Promise<void> => { await prepare()

	const defaultData = {...presenceData}
	presence.on("UpdateData", async () => {
		resetData(defaultData)
		updateCallback.function()
		if (!(await presence.getSetting('time'))) delete presenceData.startTimestamp
		if (!(await presence.getSetting('buttons'))) delete presenceData.buttons
		presence.setActivity(presenceData)
	})
	
})()