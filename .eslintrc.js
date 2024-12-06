// An .eslintrc file (or its variants like .eslintrc.json, .eslintrc.js, .eslintrc.yaml, etc.) is a configuration
// file used by ESLint, a popular tool for identifying and fixing problems in JavaScript and TypeScript code. 
// The file defines the linting rules, environments, and settings that ESLint uses when analyzing your code.

module.exports = {
    env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime',

    'react-app',
    'airbnb',
    'prettier',
  ],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'no-useless-escape': 'off',
    'default-param-last': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'no-script-url': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-template-curly-in-string': 'off',
    'react/prop-types': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-one-expression-per-line': 0,
    'linebreak-style': 0,
    'react/jsx-wrap-multilines': 0,
    'react/no-danger': 0,
    'react/forbid-prop-types': 0,
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
    'no-param-reassign': 0,
    'import/no-unresolved': 0,
    'no-console': 0,
    'react/no-multi-comp': 0,
    'react/no-array-index-key': 0,
    // "no-unused-vars": 0
    'import/no-extraneous-dependencies': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: ['react-refresh'],

};
