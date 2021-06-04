import simpleGit from "simple-git"
// import path from "path"
import globby from "globby"
import fs from "fs-extra"
import semver from "semver"
import deepEqual from "deep-equal"
import prettier from "prettier"

const gitUp = simpleGit("../PreMiD-Presences")
// const git = simpleGit(".")

const arrayEqualsIgnoreOrder = (a: Array<string>, b: Array<string>) => {
	if (a.length !== b.length) return false;
	const uniqueValues = new Set([...a, ...b]);
	for (const v of uniqueValues) {
		const aCount = a.filter(e => e === v).length;
		const bCount = b.filter(e => e === v).length;
		if (aCount !== bCount) return false;
	}
	return true;
}

const keysToCheck = [
	"description", 
	// "url", 
	"version", 
	// "logo", 
	// "thumbnail", 
	// "color", 
	"tags", 
	"regexp"
]

;(async () => {

	console.log("Preparing upstream folder...")
	console.log("Fetching upstream...")
	await gitUp.fetch("upstream", "master")
	console.log("Checking out to master...")
	await gitUp.checkout("master")
	console.log("Resetting master to upstream...")
	await gitUp.reset(["upstream/master", "--hard"])

	const presenceNames = globby.sync(["*", "!.*", "!# *", "!^ *", "!node_modules", "!@types"], {
		"onlyDirectories": true
	})
	
	presenceNames.forEach(presenceName => {
	
		console.log("\n" + presenceName + "\n")
	
		const metadataPath = `${presenceName}/dist/metadata.json`
		const metadataUpstreamPath = `../PreMiD-Presences/websites/${presenceName.slice(0, 1).toUpperCase()}/${presenceName}/dist/metadata.json`
	
		if (!fs.existsSync(metadataUpstreamPath)) return
	
		const metadata: {[index: string]: any} = fs.readJSONSync(metadataPath)
		const metadataUpstream: {[index: string]: any} = fs.readJSONSync(metadataUpstreamPath)

		if (deepEqual(metadata, metadataUpstream)) {
			console.log("Both metadatas are already equal, directly checking versions...")

			if (!semver.gte(metadataUpstream.version, metadata.version)) {
				console.log("Current version is higher than upstream vesion.")
				return
			}

			console.log("Upstream version is higher than/equals to current version.")
			console.log(`(current: ${metadata.version}, upstream: ${metadataUpstream.version})`)
			console.log(`Bumping to ${semver.inc(metadataUpstream.version, "patch")}...`)

			metadata.version = semver.inc(metadataUpstream.version, "patch")

			return

		}

		console.log("Both metadatas are not equal. Checking...")

		if (!arrayEqualsIgnoreOrder(Object.keys(metadata), Object.keys(metadataUpstream))) {
			console.log("Keys are not equal!")
			// console.log(Object.keys(metadata).join(", "))
			// console.log(Object.keys(metadataUpstream).join(", "))
		}
	
		keysToCheck.forEach(keyToCheck => {
	
			if (!metadata[keyToCheck]) return

			if (keyToCheck === "version") {

				if (!semver.gte(metadataUpstream.version, metadata.version)) {
					console.log("Current version is higher than upstream vesion.")
					return
				}
	
				console.log("Upstream version is higher/equals to the current version.")
				console.log(`(current: ${metadata.version}, upstream: ${metadataUpstream.version})`)
				console.log(`Bumping to ${semver.inc(metadataUpstream.version, "patch")}...`)

				metadata.version = semver.inc(metadataUpstream.version, "patch")

				return

			}

			if (deepEqual(metadata[keyToCheck], metadataUpstream[keyToCheck])) return

			console.log(`${keyToCheck} is not equal!`)
			metadata[keyToCheck] = metadataUpstream[keyToCheck]		
	
		})

		// if (!deepEqual(metadata, fs.readJSONSync(metadataPath))) return
	
		fs.outputFileSync(metadataPath, prettier.format(JSON.stringify(metadata), { parser: "json", useTabs: true }))

	})

})()