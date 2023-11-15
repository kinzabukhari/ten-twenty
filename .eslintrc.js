module.exports = {
  env: {
    amd: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'prettier',
    'eslint-plugin-no-inline-styles',
    'eslint-plugin-import',
  ],
  rules: {
    'react/prop-types': 'off',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ['ConditionalExpression'],
      },
    ],
    // "linebreak-style": ["error", "unix"],
    'linebreak-style': 0,
    quotes: ['error', 'double', {avoidEscape: true}],
    semi: ['error', 'always'],
    'no-empty-function': 'off',
    'react/display-name': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-console': 'error',
    'no-alert': 'error',
    'react/jsx-key': [0, {checkFragmentShorthand: false}],
    'no-inline-styles/no-inline-styles': 2,
    'import/no-duplicates': ['error', {considerQueryString: true}],
    // "prettier/prettier": [
    //   "error",
    //   {
    //     "no-inline-styles": false,
    //   },
    // ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
