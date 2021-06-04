module.exports = {
	root: true,
	env: {
		browser: true
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
		"semi": ["warn", "never"], // should be ["warn", "always", { "omitLastInOneLineBlock": true }], doesn't matter since it is handled by Prettier noneteless
		"quotes": ["warn", "double", { "avoidEscape": true }],
		"indent": "off",
		"camelcase": ["warn", { "properties": "always" }],
		"comma-dangle": ["warn", "never"],
		"one-var": "off", // should be ["warn", "consecutive"], doesn't matter since it is auto-fixed by ESLint nonetheless
		"linebreak-style": "off", // should be "lf" (Unix), doesn't matter since it is converted by Prettier nonetheless
		"no-console": "warn", // should be "error", just for reminder
		"no-var": "error",
		"no-undef": "off",
		"no-multiple-empty-lines": ["warn", { "max": 2, "maxEOF": 0, "maxBOF": 0 }],
		"curly": "off", // should be ["warn", "multi-or-nest"], doesn't matter since it is converted by Prettier nonetheless
		"eqeqeq": ["error", "always"],
		"prefer-const": "error",
		"no-multi-spaces": "error",
		"object-shorthand": "error",
		"quote-props": ["error", "as-needed"],
		"prefer-destructuring": "warn",
		"prefer-template": "warn",
		"space-before-blocks": ["error", "always"],
		"space-infix-ops": "warn",
		"func-call-spacing": ["error", "never"],
		"key-spacing": ["warn", { "beforeColon": false }],
		"dot-notation": "error",
		"no-case-declarations": "error",
		"no-mixed-operators": "error",
		"brace-style": "error",
		"template-curly-spacing": "warn",
		"no-restricted-syntax": [
			"error",
			{
			  "selector": "TSEnumDeclaration[const=true]",
			  "message": "Usage of const enums is forbidden."
			}
		  ],
		"@typescript-eslint/no-explicit-any": "error",
	},
	overrides: [
		{
		  "env": {
			"node": true,
			"mongo": true
		  },
		  "files": ["./*.ts"],
		  "rules": {
			"@typescript-eslint/no-non-null-assertion": "off",
			"no-console": "off"
		  }
		}
	  ],
	reportUnusedDisableDirectives: true,	
	noInlineConfig: true,
	plugins: ["@typescript-eslint"]
}
