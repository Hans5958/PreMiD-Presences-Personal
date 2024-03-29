const presence = new Presence({
	clientId: "733216821758525460"
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
	presenceData = {...defaultData}
}

/**
 * Search for URL parameters.
 * @param urlParam The parameter that you want to know about the value.
 */
const getURLParam = (urlParam: string): string => {
	return currentURL.searchParams.get(urlParam)
}

/**
 * An object obtained from on `mw.config.values`.
 * (Unused values on this type has been removed. Refer to the link for the full object.)
 * @link https://github.com/wikimedia-gadgets/types-mediawiki/blob/main/mw/config.d.ts
 */
type mwConfigValues = {
	wgContentLanguage: string;
	wgSiteName: string;
	wgAction: string;
	wgCanonicalNamespace: string;
	wgCurRevisionId: number;
	wgNamespaceNumber: number;
	wgPageName: string;
	wgRevisionId: number;
	wgIsMainPage: boolean;
	wgDiffOldId: number | false;
	wgDiffNewId: number;
}

const prepare = async (): Promise<void> => {

	const mwConfig: mwConfigValues = await presence.getPageletiable('mw"]["config"]["values')
		
	const action: string = mwConfig.wgAction
	const actionFromURL = (): string => getURLParam("action") || getURLParam("veaction") || "view"
	const titleFromConfig: string = decodeURIComponent(mwConfig.wgPageName.replace(/_/g, " "))

	const title = document.querySelector(".wikibase-title-label")?.textContent.trim() || document.querySelector("h1")?.textContent.trim() || titleFromConfig

	/**
	 * Returns details based on the namespace.
	 * @link https://www.wikidata.org/wiki/Help:Namespaces
	 */
	const namespaceDetails = (): string => {
		const details: {[index: string]: string} = {
			"-2": "Viewing a media",
			"-1": "Viewing a special page",
			0: "Viewing an item",
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
			120: "Viewing a propery",
			121: "Viewing a propery talk page",
			122: "Viewing a query",
			123: "Viewing a query talk page",
			146: "Viewing a lexeme",
			147: "Viewing a lexeme talk page",
			640: "Viewing a schema",
			641: "Viewing a schema talk page",
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
	} else if (mwConfig.wgDiffOldId) {
		presenceData.details = "Viewing difference between revisions"
		presenceData.state = titleFromConfig
	} else if (mwConfig.wgCurRevisionId !== mwConfig.wgRevisionId) {
		presenceData.details = "Viewing an old revision of a page"
		presenceData.state = titleFromConfig
	} else if (document.querySelector("#ca-ve-edit") || getURLParam("veaction")) { 
		presenceData.state = title + (title.toLowerCase() === titleFromConfig.toLowerCase() ? '' : ` (${titleFromConfig})`)
		updateCallback = (): void => {
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
		updateCallback()
		if (!(await presence.getSetting('time'))) delete presenceData.startTimestamp
		if (!(await presence.getSetting('buttons'))) delete presenceData.buttons
		presence.setActivity(presenceData)
	})
	
})()