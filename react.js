module.exports = {
  "parser": "babel-eslint",
  "extends": [
    require.resolve("eslint-config-standard-react"),
    require.resolve('./'),
  ],
  "rules": {
    "react/jsx-closing-bracket-location": 0, // i don't get it
    "react/no-multi-comp": 2,
  }
}
