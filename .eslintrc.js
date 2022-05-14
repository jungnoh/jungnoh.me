module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@next/next/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["prettier", "react", "@typescript-eslint", "import"],
  rules: {
    indent: "off",
    quotes: "off",
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"],
    "@typescript-eslint/no-var-requires": "off",
    "import/order": ["error", { "newlines-between": "always" }],
    "object-curly-spacing": ["error", "always"],
    "comma-spacing": ["error", { before: false, after: true }],
    "prettier/prettier": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
