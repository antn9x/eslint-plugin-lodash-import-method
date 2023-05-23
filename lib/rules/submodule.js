/**
 * @fileoverview lodash-import-method
 * @author antn9x
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "submodule",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: 'code', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      fail: 'import lodash submodule only'
    }
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    function getSubmoduleImport(specifiers) {
      console.log(specifiers[0].local.name)
      const importLines = specifiers
        .map(({ local: { name } }) =>
          `import ${name} from 'lodash/${name}';`)
        .join('\n');
      // const name = node.specifiers[0].local.name;
      return importLines
    }
    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      ImportDeclaration(node) {
        // console.log(node)
        const { source: { value }, specifiers } = node;
        if (['lodash'].includes(value)) {
          context.report({
            node,
            messageId: 'fail',
            fix(fixer) {
              return fixer.replaceText(node, getSubmoduleImport(specifiers))
            }
          })
        }
      }
    };
  },
};
