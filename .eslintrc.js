module.exports = {
	'env': {
		'es6': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 2017,
		'sourceType': 'module',
		'ecmaFeatures': {
      'modules': true
		},
		'project': './tsconfig.json'
	},
	'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab',
			{
				'SwitchCase': 1
			}
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'curly': [
			'error',
			'multi'
		],
		'require-await': [
			'error'
		],
		'sort-imports': [
			'error',
			{
				'memberSyntaxSortOrder': ['none', 'single', 'all', 'multiple'],
				'ignoreDeclarationSort': true
			}
		],
		'@typescript-eslint/adjacent-overload-signatures': [
			'error'
		],
		'@typescript-eslint/ban-ts-ignore': [
			'off'
		],
		'@typescript-eslint/consistent-type-definitions': [
			'error',
			'type'
		],
		'@typescript-eslint/no-explicit-any': [
			'error',
			{
				'ignoreRestArgs': true
			}
		],
		'no-trailing-spaces': [
			'error'
		],
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{
				'accessibility': 'no-public'
			}
		],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				'multiline': {
					'delimiter': 'semi'
				}
			}
		],
		'@typescript-eslint/indent': [
			'error',
			'tab',
			{
				'SwitchCase': 1
			}
		],
		'@typescript-eslint/array-type': [
			'error',
			{
				'default': 'array',
				'readonly': 'array'
			}
		],
		'@typescript-eslint/consistent-type-assertions': [
			'error',
			{
				'assertionStyle': 'as',
				'objectLiteralTypeAssertions': 'allow'
			}
		],
		'@typescript-eslint/explicit-function-return-type': [
			'off'
		],
		'@typescript-eslint/naming-convention': [
			'error',
			{
				'format': ['camelCase', 'PascalCase'],
				'selector': 'default'
			}
		],
		'@typescript-eslint/no-misused-promises': [
			'error'
		],
		'@typescript-eslint/no-non-null-assertion': [
			'off'
		],
		'@typescript-eslint/explicit-module-boundary-types': [
			'off'
		]
	}
};