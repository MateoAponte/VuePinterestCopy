module.exports = {
	root: true,
	env: {
		node: true,
	},
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: require.resolve("@typescript-eslint/parser"),
		extraFileExtensions: [".vue"],
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["prettier", "@typescript-eslint", "vue", "prettier"],
	extends: [
		"eslint:recommended",
		"plugin:vue/recommended",
		"plugin:prettier/recommended",
		"prettier",
	],
	rules: {
		"no-console": "off",
		"no-debugger": "off",
		"no-unused-vars": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		indent: [2, "tab"],
	},
};
