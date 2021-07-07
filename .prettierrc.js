module.exports = {
  plugins: ['prettier-plugin-jsdoc'],
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  overrides: [
    {
      files: ['**/*.html'],
      options: {
        singleQuote: true
      }
    }
  ]
};
