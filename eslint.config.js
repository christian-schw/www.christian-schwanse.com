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
      "no-undef": "warn"
    }
  },
];