module.exports = {
  root: true,

  env: {
    browser: true,
  },

  parser: "vue-eslint-parser",

  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },

  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:unicorn/recommended",
    "plugin:vue-scoped-css/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],

  plugins: ["simple-import-sort", "unused-imports", "filenames", "import"],

  rules: {
    "no-console": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "unicorn/prefer-logical-operator-over-ternary": "off",
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unicorn/prefer-module": "off",
    "unicorn/consistent-function-scoping": "off",
    "unicorn/no-await-expression-member": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "unicorn/no-array-reduce": "off",
    "@typescript-eslint/no-var-requires": "off",
    "vue/attributes-order": [
      "error",
      {
        alphabetical: true,
      },
    ],
    "vue/component-name-in-template-casing": [
      "error",
      "kebab-case",
      {
        registeredComponentsOnly: false,
      },
    ],
    "vue/custom-event-name-casing": ["error", "kebab-case"],
    "unicorn/prefer-code-point": "off",
  },

  overrides: [
    {
      files: ["src/pages/**/*.vue", "src/core/theme/layouts/**/*.vue"],
      rules: {
        "vue/multi-word-component-names": "off",
        "unicorn/filename-case": "off",
      },
    },
    {
      files: ["src/auto-imports.d.ts"],
      rules: {
        "unicorn/prevent-abbreviations": "off",
      },
    },
  ],
};
