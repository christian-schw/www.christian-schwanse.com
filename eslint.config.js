import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigESLint from "eslint-config-eslint";
import eslintConfigESLintFormatting from "eslint-config-eslint/formatting";


export default [
  pluginJs.configs.recommended,
  ...eslintConfigESLint,
  eslintConfigESLintFormatting,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },

    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "n/no-unsupported-features/node-builtins": "warn",
      "func-style": [
        "error",
        "declaration",
        {
          "allowArrowFunctions": true
        }
      ],
      "jsdoc/check-tag-names": [
        "error",
        {
          "definedTags": ["jest-environment"]
        }
      ]
    }
  },
];