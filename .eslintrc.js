module.exports = {
  'env': {
      'browser': true,
      'es2021': true
  },
  'extends': [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
      'ecmaFeatures': {
          'jsx': true
      },
      'ecmaVersion': 12,
      'sourceType': 'module'
  },
  'plugins': [
      'react',
      '@typescript-eslint'
  ],
  'rules': {
      '@typescript-eslint/no-non-null-assertion': 'off',
      "@typescript-eslint/explicit-module-boundary-types": "off",
      'react/react-in-jsx-scope': 'off',
      'linebreak-style': 0,
      'semi': [2, 'always'],
      'no-mixed-spaces-and-tabs': 0,
      'react/prop-types': 'off',
      'no-debugger': 'off',
      'no-unused-vars': 'off',
      'require-yield': 'off',
      'no-case-declarations': 'off',
      'object-curly-spacing': 'off',
      'jsx-quotes': [2, 'prefer-double'],
  }
};
