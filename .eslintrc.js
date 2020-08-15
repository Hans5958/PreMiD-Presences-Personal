module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true
	},
	extends: ["eslint:recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended"],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly"
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2020,
		project: "./tsconfig.json"
	},
	rules: {
		"semi": ["warn", "never"],
		"quotes": "off",
		"indent": "off",
		"camelcase": "off",
		"comma-dangle": ["warn", "never"],
		"one-var": "off", // should be ["warn", "consecutive"], doesn't matter since it is auto-fixed by ESLint nonetheless
		"linebreak-style": "off", // should be Unix (lf), doesn't matter since it is converted by Prettier nonetheless
		"no-console": "warn", // should be error, just for reminder
		"no-var": "error",
		"no-undef": "off",
		"no-restricted-syntax": [
			"error",
			{
			  "selector": "TSEnumDeclaration[const=true]",
			  "message": "Usage of const enums is forbidden."
			}
		  ],
		"@typescript-eslint/camelcase": "off",
		"@typescript-eslint/no-explicit-any": "error"
	},
	plugins: ["@typescript-eslint"]
}
