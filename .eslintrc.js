module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true
  },
  ignorePatterns: ['node_modules'],
  extends: [
    'airbnb-base',
    'prettier',
    'eslint:recommended',
    'plugin:import/react',
    'plugin:react/recommended'
  ],
   "settings": {
        "import/resolver": {
          "node": {
            "extensions": [".js",".jsx"]
          }
        }
    },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  rules: {
    quotes: ['warn', 'single', 'avoid-escape'],
    'no-plusplus': 'off',
    'on-var': 'off',
    'max-classes-per-file': 'off',
    'no-console': 'off',
    'react/react-in-jsx-scope': 'off'
  }
};
