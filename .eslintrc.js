module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:vue/essential',
    'eslint:recommended',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: true,
        trailingComma: 'all',
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
