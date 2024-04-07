'use strict'
import eslintRulesPlugin from './eslint-rules-plugin/index.js'

export default [
  {
    files: ['src/**/*.js'],
    plugins: { localRules: eslintRulesPlugin },
    rules: {
      'no-unused-vars': 'error',
      'localRules/enforce-foo-bar': 'error',
    },
  },
]
