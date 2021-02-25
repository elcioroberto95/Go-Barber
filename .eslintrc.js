module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",

  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-underscore-dangle": "off",
    "camelcase": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [
          ".ts",
          ".tsx",
        ],
      },
    },
  },
};
