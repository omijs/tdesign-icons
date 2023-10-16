module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  env: {
    browser: true,
  },
  rules: {
    quotes: ['error', 'single'],
    'semi': ['error', 'never']
  },
  extends: ['plugin:prettier/recommended'],
  ignorePatterns: ['test/qunit/qunit.js'],
  overrides: [
    {
      files: ['**/*.ts'],
      parserOptions: {
       
      },
     
   
    },
  ],
};
