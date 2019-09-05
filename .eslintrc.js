module.exports = {
	"extends": [
		"eslint:recommended",
		"airbnb-base"
	],

	"parserOptions": {
		"ecmaVersion": 2019
	},

	"env": {
		"node": true,
		"es6": true
	},
	"rules": {
		"max-len": [
			"error", { "code": 120 }
		],

		"no-console": [2, {
			"allow": ["info", "warn", "error"]
		}],

		"no-multi-spaces": [2, {
			exceptions: {
				"VariableDeclarator": true
			}
		}]
	}
};
