'use strict'
import eslintRules from './eslint-rules/index.js'

export default [
  {
    files: ['src/**/*.js'],
    plugins: { localRules: eslintRules },
    rules: {
      'no-unused-vars': 'error',
      'localRules/enforce-foo-bar': 'error',
    },
  },
]
