/**
 * @fileoverview lodash-import-method
 * @author antn9x
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/submodule"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("submodule", rule, {
  valid: [
    // give me some code that won't trigger a warning
    {
      code: "import min from 'lodash/min'",
      errors: [{ message: "Fill me in.", type: "Me too" }],
      parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module'
      }
    },
  ],

  invalid: [
    {
      code: "import {min} from 'lodash'",
      errors: [{ message: "Fill me in.", type: "Me too" }],
      parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module'
      }
    },
  ],
});
