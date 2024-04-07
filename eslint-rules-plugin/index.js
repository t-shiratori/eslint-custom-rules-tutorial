import { enforceFooBarRule } from './enforce-foo-bar.js'
const plugin = {
  meta: {
    name: 'eslint-rules-plugin',
    version: '1.0.0',
  },
  rules: { 'enforce-foo-bar': enforceFooBarRule },
}
export default plugin
