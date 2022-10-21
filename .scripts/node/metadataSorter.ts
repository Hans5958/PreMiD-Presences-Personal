import "source-map-support/register";

import { sync as glob } from "glob";
import { isValidJSON, readFile, writeJson, type Metadata } from "../../../util/tools/util";

const allmeta: [Metadata, string][] = glob(
	"**/metadata.json"
).reduce((result, pF) => {
	const file = readFile(pF);
	if (isValidJSON(file)) result.push([JSON.parse(file), pF]);
	else
		console.error(`Error. ${pF} is not a valid metadata file, skipping...`);

	return result;
}, [])

// console.log(allmeta)

;(async function () {
	for (const [file, path] of allmeta) {
		const newData: Metadata = {
			$schema: file['$schema'],
			// This check is skipped! Please ensure it is the latest schema!
			// https://github.com/PreMiD/Schemas
			author: file.author,
			contributors: file.contributors,
			service: file.service,
			altnames: file.altnames,
			description: file.description,
			url: file.url,
			regExp: file.regExp,
			version: file.version,
			logo: file.logo,
			thumbnail: file.thumbnail,
			color: file.color,
			category: file.category,
			tags: file.tags,
			iframe: file.iframe,
			iFrameRegExp: file.iFrameRegExp,
			readLogs: file.readLogs,
			settings: file.settings,
		};

		for (const key in newData)
			if (typeof newData[key as keyof Metadata] === "undefined")
				delete newData[key as keyof Metadata];

		writeJson(newData, path);
	}
})();
