export const enforceFooBarRule = {
  meta: {
    type: 'problem',
    docs: {
      description: "Enforce that a variable named `foo` can only be assigned a value of 'bar'.",
    },
    fixable: 'code',
    schema: [],
    messages: {
      fooBarMessageId: 'Value other than "bar" assigned to `const foo`. Unexpected value: {{ notBar }}.',
    },
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        if (node.parent.kind === 'const') {
          if (node.id.type === 'Identifier' && node.id.name === 'foo') {
            if (node.init && node.init.type === 'Literal' && node.init.value !== 'bar') {
              context.report({
                node,
                messageId: 'fooBarMessageId',
                data: {
                  notBar: node.init.value,
                },
                fix(fixer) {
                  return fixer.replaceText(node.init, '"bar"')
                },
              })
            }
          }
        }
      },
    }
  },
}
