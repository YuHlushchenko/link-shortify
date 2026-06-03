const tseslint = require('typescript-eslint')
const prettierConfig = require('eslint-config-prettier')

module.exports = tseslint.config(
  { ignores: ['dist/**'] },
  {
    files: ['src/**/*.ts'],
    extends: [...tseslint.configs.recommended, prettierConfig],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
      '@typescript-eslint/no-unused-expressions': 'off',
      'no-console': 'warn',
    },
  },
)
