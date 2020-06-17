var presence = new Presence({
	clientId: "662312595239469097",
})

var currentURL = new URL(document.location.href),
	currentPath = currentURL.pathname.slice(1).split("/"),
	browsingStamp = Math.floor(Date.now() / 1000), 
	presenceData: PresenceData = {
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
