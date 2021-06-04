# Meta

App description: This is an app for PreMiD.
Imgur album: PreMiD - [name]

# Non-Strict Base (errors on ESLint, not recommended)

```ts
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
```

# Non-Strict Base Supplement

```ts
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
```

# ESLint/Prettify Safe Base

```ts
var presence = new Presence({
	clientId: "662312595239469097"
});

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
			return this._function;
		},
		set function(parameter) {
			this._function = parameter;
		},
		get present(): boolean {
			return this._function !== null;
		}
	};

/**
 * Initialize/reset presenceData.
 */
function resetData(): void {
	currentURL = new URL(document.location.href);
	currentPath = currentURL.pathname.slice(1).split("/");
	presenceData = {
		details: "Viewing an unsupported page" as string,
		state: undefined as string,
		largeImageKey: "lg" as string,
		startTimestamp: browsingStamp as number,
		endTimestamp: undefined as number
	};
}

((): void => {
	// This is the anonymous function.
	// All code related to the presence are written here.
})();

if (updateCallback.present) {
	presence.on("UpdateData", async () => {
		resetData();
		updateCallback.function();
		presence.setActivity(presenceData);
	});
} else {
	presence.on("UpdateData", async () => {
		presence.setActivity(presenceData);
	});
}
```

# ESLint/Prettify Safe Base Supplement

```ts
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
			console.error(
				"Whoops. It seems that this page is not supported. \nPlease contact @Hans5958#0969 to request a support for this page."
			);
		else
			console.warn(
				"It seems that this page is not fully supported. \nPlease contact @Hans5958#0969 to request a support for this page."
			);
		console.log(currentURL.href);
	},
	/**
	 * Handles fatal errors.
	 * @param error The error that it threw.
	 */
	fatalError(error: string): void {
		console.groupEnd();
		console.error(
			"Fatal error! Terminating.\nPlease report this problem to @Hans5958#0969."
		);
		console.groupCollapsed("Error log");
		console.log(currentURL.href);
		console.error(error);
		console.groupEnd();
	}
};

/**
 * Search for URL parameters.
 * @param urlParam The parameter that you want to know about the value.
 */
function getURLParam(urlParam: string): string {
	return currentURL.searchParams.get(urlParam);
}
```

# Adjusted ESLint/Prettify Safe Base

```ts
const presence = new Presence({
	clientId: "662312595239469097"
})

const browsingStamp = Math.floor(Date.now() / 1000)
let currentURL = new URL(document.location.href), 
	currentPath = currentURL.pathname.replace(/^\/|\/$/g, "").split("/"),
	presenceData: PresenceData = {
		details: "Viewing an unsupported page",
		largeImageKey: "lg",
		startTimestamp: browsingStamp
	}
const updateCallback = {
		_function: null as () => void,
		get function(): () => void {
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
```

# Adjusted ESLint/Prettify Safe Supplement

```ts
/**
 * Function definitions for logging-related things.
 */
const logHandler = {
	/**
	 * Handles not supported pages.
	 * @param isCritical If the URL is essential to the operation, this should be true, so it will output an error, not a warning.
	 */
	pageNotSupported(isCritical = false): void {
		if (isCritical)
			presence.error("Whoops. It seems that this page is not supported. \nPlease report this to Hans5958#0969 on Discord.")
		else
			presence.error("It seems that this page is not fully supported. \nPlease report this to Hans5958#0969 on Discord.")
		presence.info(currentURL.href)
	},
	/**
	 * Handles fatal errors.
	 * @param error The error that it threw.
	 */
	fatalError(error: string): void {
		presence.error(
			"Fatal error! Terminating.\nPlease report this to Hans5958#0969 on Discord."
		)
		presence.info(currentURL.href)
		presence.info(error)
	}
}
/**
 * Search for URL parameters.
 * @param urlParam The parameter that you want to know about the value.
 */
const getURLParam = (urlParam: string): string => {
	return currentURL.searchParams.get(urlParam)
}
```