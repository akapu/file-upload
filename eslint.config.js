import globals from "globals";
import pluginJs from "@eslint/js";
import { configs as litConfigs } from "eslint-plugin-lit";
import { configs as wcConfigs } from "eslint-plugin-wc";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  litConfigs["flat/recommended"],
  wcConfigs["flat/recommended"],
];
