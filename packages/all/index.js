// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: [
    '@holazz/eslint-config-react',
    '@holazz/eslint-config-vue',
  ],
})
