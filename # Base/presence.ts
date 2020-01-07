var presence = new Presence({
	clientId: "662312595239469097",
	mediaKeys: false
})

var browsingStamp = Math.floor(Date.now() / 1000), 
	href = new URL(document.location.href),
	presenceData = {
		details: <string> 'In construction',
		state: <string> null,
		largeImageKey: <string> "lg",
		startTimestamp: <number> browsingStamp,
		endTimestamp: <number> null
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

================================================================
   CODE HERE - CODE HERE - CODE HERE - CODE HERE - CODE HERE
================================================================

*/

})();

if (updateCallback.present) {
	presence.on("UpdateData", async () => {
		resetData()
        updateCallback.function();
		cleanData()
        presence.setActivity(presenceData);
	})
} else {
	cleanData()
	presence.on("UpdateData", async () => {
		presence.setActivity(presenceData)
	})
}

/**
 * Initialize presenceData
 */
function resetData() {
	presenceData = {
		details: <string> 'In construction',
		state: <string> null,
		largeImageKey: <string> "lg",
		startTimestamp: <number> browsingStamp,
		endTimestamp: <number> null
	};
}

/**
 * Cleans presenceData
 */
function cleanData() {
	Object.keys(presenceData).forEach(key => {
		if (presenceData[key] === null) delete presenceData[key]
	})
}