// Initially configured on 05-18-2017 with ESLint version 3.19.0
// ESLint Configs
// =============================================================================
const parser = "babel-eslint"
const parserOptions = {
  "ecmaFeatures": {
    "jsx": true,
    "modules": true,
    "experimentalObjectRestSpread": true
  }
}

const env = {
  "es6": true,
  "node": true,
  "browser": true,
  "jasmine": true,
  "jest": true
}

const plugins = [
  "react",
  "import"
]

const settings = {
  "import/extensions": ['js', 'jsx', 'json', 'css'],
  "react": {
    "version": "15.5.4"
  }
}


// Possible Errors
// =============================================================================
const rulesPossibleErrors = {
  'no-await-in-loop': 0,
  'no-compare-neg-zero': 2,
  'no-cond-assign': 2,
  'no-console': 2,
  'no-constant-condition': 2,
  'no-control-regex': 2,
  'no-debugger': 2,
  'no-dupe-args': 2,
  'no-dupe-keys': 2,
  'no-duplicate-case': 2,
  'no-empty': 2,
  'no-empty-character-class': 2,
  'no-ex-assign': 2,
  'no-extra-boolean-cast': 2,
  'no-extra-parens': 0,
  'no-extra-semi': 2,
  'no-func-assign': 2,
  'no-inner-declarations': 2,
  'no-invalid-regexp': 2,
  'no-irregular-whitespace': 2,
  'no-obj-calls': 2,
  'no-prototype-builtins': 0,
  'no-regex-spaces': 2,
  'no-sparse-arrays': 2,
  'no-template-curly-in-string': 2,
  'no-unexpected-multiline': 2,
  'no-unreachable': 2,
  'no-unsafe-finally': 2,
  'no-unsafe-negation': 2,
  'use-isnan': 2,
  'valid-jsdoc': 0,
  'valid-typeof': 2
}


// Best Practices
// =============================================================================
const rulesBestPractices = {
  'accessor-pairs': 0,
  'array-callback-return': 2,
  'block-scoped-var': 2,
  'class-methods-use-this': 0,
  'complexity': 0,
  'consistent-return': 2,
  'curly': [2, "multi-line", "consistent"],
  'default-case': 2,
  'dot-location': [2, 'property'],
  'dot-notation': 2,
  'eqeqeq': [2, "always", {"null": "ignore"}],
  'guard-for-in': 2,
  'no-alert': 2,
  'no-caller': 2,
  'no-case-declarations': 2,
  'no-div-regex': 2,
  'no-else-return': 2,
  'no-empty-function': 2,
  'no-empty-pattern': 2,
  'no-eq-null': 0,
  'no-eval': 2,
  'no-extend-native': 2,
  'no-extra-bind': 2,
  'no-extra-label': 2,
  'no-fallthrough': 0,
  'no-floating-decimal': 2,
  'no-global-assign': 2,
  'no-implicit-coercion': 0,
  'no-implicit-globals': 2,
  'no-implied-eval': 2,
  'no-iterator': 2,
  'no-labels': 2,
  'no-lone-blocks': 2,
  'no-loop-func': 2,
  'no-magic-numbers': [2, {
    'ignore': [0, 1],
    'enforceConst': true
  }],
  'no-multi-spaces': 0,
  'no-multi-str': 2,
  'no-new': 2,
  'no-new-func': 2,
  'no-new-wrappers': 2,
  'no-octal': 2,
  'no-octal-escape': 2,
  'no-param-reassign': 0,
  'no-proto': 2,
  'no-redeclare': 2,
  'no-restricted-properties': 2,
  'no-return-assign': 2,
  'no-return-await': 2,
  'no-script-url': 2,
  'no-self-assign': 2,
  'no-self-compare': 2,
  'no-sequences': 2,
  'no-throw-literal': 2,
  'no-unmodified-loop-condition': 2,
  'no-unused-expressions': 0,
  'no-unused-labels': 2,
  'no-useless-call': 2,
  'no-useless-concat': 2,
  'no-useless-escape': 2,
  'no-useless-return': 2,
  'no-void': 2,
  'no-warning-comments': 0,
  'no-with': 2,
  'prefer-promise-reject-errors': 0,
  'radix': 2,
  'require-await': 2,
  'vars-on-top': 2,
  'wrap-iife': 2,
  'yoda': 2
}


// Strict Mode
// =============================================================================
const rulesStrictMode = {
  'strict': 0
}


// Variables
// =============================================================================
const rulesVariables = {
  'init-declarations': 0,
  'no-catch-shadow': 0,
  'no-delete-var': 2,
  'no-label-var': 2,
  'no-restricted-globals': 0,
  'no-shadow': 0,
  'no-shadow-restricted-names': 2,
  'no-undef': 2,
  'no-undef-init': 2,
  'no-undefined': 2,
  'no-unused-vars': [2, {
    "vars": "all",
    "args": "after-used"
  }],
  'no-use-before-define': [2, {"functions": false}]
}


// Node.js and CommonJS
// =============================================================================
const rulesNodeJSandCommonJS = {
  'callback-return': 0,
  'global-require': 0,
  'handle-callback-err': 0,
  'no-mixed-requires': 2,
  'no-new-require': 2,
  'no-path-concat': 2,
  'no-process-env': 0,
  'no-process-exit': 0,
  'no-restricted-modules': 0,
  'no-sync': 0
}


// Stylistic Issues
// =============================================================================
const rulesStylisticIssues = {
  'array-bracket-spacing': [2, 'always', {
    'singleValue': false,
    'objectsInArrays': false,
    'arraysInArrays': false
  }],
  'block-spacing': 2,
  'brace-style': [2, '1tbs', { "allowSingleLine": true }],
  'camelcase': [2, { "properties": "always" }],
  'capitalized-comments': [2, 'always', { "ignoreConsecutiveComments": true }],
  'comma-dangle': 0,
  'comma-spacing': [2, {
    "before": false,
    "after": true
  }],
  'comma-style': [2, 'last'],
  'computed-property-spacing': [2, 'never'],
  'consistent-this': [2, 'self'],
  'eol-last': [2, 'always'],
  'func-call-spacing': [2, 'never'],
  'func-name-matching': 0,
  'func-names': 0,
  'func-style': 0,
  'id-blacklist': 0,
  'id-length': 0,
  'id-match': 0,
  'indent': [2, 2, {"SwitchCase": 1}],
  'jsx-quotes': [2, 'prefer-double'],
  'key-spacing': [2, {
    "beforeColon": false,
    "afterColon": true,
    "mode": 'minimum'
  }],
  'keyword-spacing': [2, {
    "before": true,
    "after": true
  }],
  'line-comment-position': 0,
  'linebreak-style': [2, 'unix'],
  'lines-around-comment': [2, {
    "beforeBlockComment": true,
    "beforeLineComment": true,
    "allowBlockStart": true
  }],
  'lines-around-directive': 0,
  'max-depth': 0,
  'max-len': [2, {
    "code": 100,
    "tabWidth": 2,
    "ignoreUrls": true,
    "ignoreStrings": true,
    "ignoreTemplateLiterals": true,
    "ignoreRegExpLiterals": true,
  }],
  'max-lines': 0,
  'max-nested-callbacks': 0,
  'max-params': [2, 3],
  'max-statements': 0,
  'max-statements-per-line': 0,
  'multiline-ternary': 0,
  'new-cap': 0,
  'new-parens': 2,
  'newline-after-var': 0,
  'newline-before-return': 0,
  'newline-per-chained-call': 0,
  'no-array-constructor': 2,
  'no-bitwise': 0,
  'no-continue': 0,
  'no-inline-comments': 0,
  'no-lonely-if': 2,
  'no-mixed-operators': 0,
  'no-mixed-spaces-and-tabs': 2,
  'no-multi-assign': 0,
  'no-multiple-empty-lines': 0,
  'no-negated-condition': 0,
  'no-nested-ternary': 2,
  'no-new-object': 2,
  'no-plusplus': 0,
  'no-restricted-syntax': 0,
  'no-tabs': 0,
  'no-ternary': 0,
  'no-trailing-spaces': 2,
  'no-underscore-dangle': 0,
  'no-unneeded-ternary': [2, { "defaultAssignment": false }],
  'no-whitespace-before-property': 2,
  'nonblock-statement-body-position': 0,
  'object-curly-newline': 0,
  'object-curly-spacing': 0,
  'object-property-newline': 0,
  'one-var': [2, 'never'],
  'one-var-declaration-per-line': [2, 'always'],
  'operator-assignment': 0,
  'operator-linebreak': 0,
  'padded-blocks': 0,
  'quote-props': [2, 'as-needed'],
  'quotes': [2, 'single', {
    'avoidEscape': true,
    'allowTemplateLiterals': true,
  }],
  'require-jsdoc': 0,
  'semi-spacing': 0,
  'sort-keys': 0,
  'sort-vars': 0,
  'space-before-blocks': [2, 'always'],
  'space-before-function-paren': [2, 'never'],
  'space-in-parens': 0,
  'space-infix-ops': 0,
  'space-unary-ops': 0,
  'spaced-comment': [2, 'always'],
  'template-tag-spacing': 0,
  'unicode-bom': 0,
  'wrap-regex': 0
}


// ECMAScript 6
// =============================================================================
const rulesECMAScript6 = {
  'arrow-body-style': 0,
  'arrow-parens': 0,
  'arrow-spacing': [2, {
    "before": true,
    "after": true,
  }],
  'constructor-super': 2,
  'generator-star-spacing': 0,
  'no-class-assign': 2,
  'no-confusing-arrow': 0,
  'no-const-assign': 2,
  'no-dupe-class-members': 2,
  'no-duplicate-imports': 2,
  'no-new-symbol': 2,
  'no-restricted-imports': 0,
  'no-this-before-super': 2,
  'no-useless-computed-key': 2,
  'no-useless-constructor': 2,
  'no-useless-rename': 2,
  'no-var': 2,
  'object-shorthand': 0,
  'prefer-arrow-callback': 0,
  'prefer-const': [2, { "destructuring": "all" }],
  'prefer-destructuring': [2, {
    "array": false,
    "object": true
  }, {
    "enforceForRenamedProperties": false
  }],
  'prefer-numeric-literals': 0,
  'prefer-rest-params': 2,
  'prefer-spread': 2,
  'prefer-template': 2,
  'require-yield': 2,
  'rest-spread-spacing': [2, 'never'],
  'sort-imports': 0,
  'symbol-description': 2,
  'template-curly-spacing': [2, 'never'],
  'yield-star-spacing': 0,
}


// React
// =============================================================================
const rulesPluginReact = {
  "react/display-name": 2,
  "react/jsx-boolean-value": 0,
  "react/jsx-curly-spacing": 2,
  "react/jsx-no-duplicate-props": 2,
  "react/jsx-no-undef": 2,
  "react/sort-prop-types": 2,
  "react/jsx-sort-props": 0,
  "react/jsx-uses-react": 2,
  "react/jsx-uses-vars": 2,
  "react/no-danger": 2,
  "react/no-did-mount-set-state": 2,
  "react/no-did-update-set-state": 2,
  "react/no-multi-comp": 0,
  "react/no-unknown-property": 2,
  "react/prop-types": 2,
  "react/react-in-jsx-scope": 0,
  "react/require-extension": 0,
  "react/self-closing-comp": 2,
  "react/sort-comp": 2,
  "react/jsx-wrap-multilines": 2,
  "react/no-deprecated": 2,
  "react/no-danger-with-children": 2,
  "react/no-direct-mutation-state": 2,
  "react/no-is-mounted": 2,
  "react/no-render-return-value": 2,
  "react/prefer-es6-class": 2,
  "react/require-render-return": 2,
  "react/style-prop-object": 2,
  "react/no-children-prop": 2,
  "react/no-find-dom-node": 2,
  "react/no-unescaped-entities": 2,
}


// Imports
// =============================================================================
const rulesPluginImport = {
  "import/no-unresolved": [2, {commonjs: true, amd: true}],
  "import/named": 2,
  "import/namespace": 2,
  "import/default": 2,
  "import/export": 2,
}


// Final composed config object
// =============================================================================
module.exports = exports = {
  parser,
  parserOptions,
  env,
  plugins,
  settings,
  rules: Object.assign({},
    rulesPossibleErrors,
    rulesBestPractices,
    rulesStrictMode,
    rulesVariables,
    rulesNodeJSandCommonJS,
    rulesStylisticIssues,
    rulesECMAScript6,
    rulesPluginReact,
    rulesPluginImport
  )
}
