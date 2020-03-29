module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["eslint:recommended", "eslint-config-airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "import/extensions": ["error", { js: "always" }],
    "linebreak-style": ["error", "windows"],
    "no-console": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        message: "Unexpected property on console object was called"
      }
    ]
  }
};
