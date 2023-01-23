module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'no-unused-vars': 0,
    'import/no-extraneous-dependencies': 0,
    'no-console': 0,
    'max-len': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'no-lone-blocks': 0,
    'no-unused-expressions': 0,
    'no-bitwise': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,

  },
};
