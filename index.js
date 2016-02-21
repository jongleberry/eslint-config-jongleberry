module.exports = {
  "parser": "babel-eslint",
  "extends": [
    require.resolve("eslint-config-standard"),
  ],
  "rules": {
    // disable eslint rules
    "no-underscore-dangle": 0, // why not?
    "require-jsdoc": 0, // flow type is better
    "valid-jsdoc": 0,

    // enable eslint rules
    "func-style": [2, "declaration", { "allowArrowFunctions": true }],
    "no-invalid-this": 0, // this doesn't even work on node streams

    // disable airbnb rules
    "camelcase": 0, // who cares
    "consistent-return": 0, // unnecessary
    "default-case": 0, // don't always need one
    "no-nested-ternary": 0, // why not?!
    "no-param-reassign": 0, // i do this all the time
    "no-shadow": 0, // necessary w/ callbacks sometimes
    "no-use-before-define": [2, "nofunc"], // function declarations!
    "react/jsx-closing-bracket-location": 0, // i don't get it
    "strict": 0, // doesn't work inside modules

    // enable airbnb rules
    "func-names": 0, // use arrow functions instead, but it doesn't really work as expected
    "object-curly-spacing": [2, "always"], // yes please

    // disable google rules
    "max-len": 0, // what is this? 1999?
    "no-eq-null": 0, // checks whether it's undefined
    "no-implicit-coercion": 0, // no, it's awesome!
    "no-inline-comments": 0, // wtf?
    "no-warning-comments": 0, // wtf?

    // enable google rules
    "operator-assignment": 2,
    "max-nested-callbacks": [2, 3],
    "no-negated-condition": 2,
    "quote-props": [2, "as-needed"],

    // unset standard rules
    "comma-dangle": 0, // who cares
    "no-loop-func": 2, // if need to do it, write an eslint comment

    // custom rules
    "arrow-parens": 0, // [2, "as-needed"] doesn't work w/ async functions
    "no-cond-assign": [2, "except-parens"],
    "no-console": 2,
    "no-var": 2,
    "object-shorthand": [2, "always"],
    "operator-linebreak": [2, "before", {
      "overrides": {
        "=": "after"
      }
    }],
    "prefer-arrow-callback": 2,
    "prefer-const": 2,
    "prefer-spread": 2,
    "prefer-template": 0, // doesn't make sense all the time
    "radix": 0,
    "require-yield": 0, // doesn't make sense for Koa routes w/o async stuff
  }
}
