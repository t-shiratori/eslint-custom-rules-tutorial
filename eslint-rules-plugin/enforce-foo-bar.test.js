import { RuleTester } from 'eslint'
import { enforceFooBarRule } from './enforce-foo-bar.js'

const ruleTester = new RuleTester({ languageOptions: { ecmaVersion: 'latest' } })

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
  'enforce-foo-bar', // rule name
  enforceFooBarRule, // rule code
  {
    valid: [
      {
        name: '変数名がfooで、内容がbarの場合',
        code: "const foo = 'bar';",
      },
      {
        name: '変数名がfoo以外で、内容がbar以外の場合',
        code: "const huga = 'bar';",
      },
    ],
    invalid: [
      {
        name: '変数名がfooで、内容がbar以外の場合はbarに修正される',
        code: "const foo = 'baz';",
        output: 'const foo = "bar";',
        errors: [
          {
            messageId: 'fooBarMessageId',
          },
        ],
      },
    ],
  },
)
