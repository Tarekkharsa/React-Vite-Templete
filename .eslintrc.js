module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    // tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: ['simple-import-sort', 'prettier'],
  rules: {
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    'react/require-default-props': 'off',
    'import/extensions': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'react/react-in-jsx-scope': 'off',
    // '@typescript-eslint/dot-notation': 'off',
    // 'jsx-a11y/accessible-emoji': 'off',
    // 'react/prop-types': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': [
      'warn',
      {
        ignoreTypeValueShadow: true,
        ignoreFunctionTypeParameterNameValueShadow: true,
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
};
