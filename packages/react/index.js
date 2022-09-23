// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@holazz/eslint-config-ts',
  ],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/react-in-jsx-scope': 'off',
  },
})
