module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",

  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-underscore-dangle": "off",
    "camelcase": "off",
    "@typescript-eslint/ban-types": "off",
    "no-unused-expressions":"off",
    "@typescript-eslint/no-non-null-assertion":"off",
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
