// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
        quoteProps: 'preserve',
      },
    ],
    'curly': ['error', 'multi-or-nest', 'consistent'],
    'quote-props': ['error', 'consistent-as-needed'],
    'no-tabs': 'error',
    'no-unexpected-multiline': 'error',
  },
})
