import { defineConfig, globalIgnores } from 'eslint/config'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  globalIgnores(['**/storybook-static', '.loki', 'config/.storybook/**']),
  {
    extends: [
      ...nextCoreWebVitals,
      ...nextTypescript,
      ...compat.extends('prettier'),
      ...compat.extends('plugin:storybook/recommended'),
    ],

    rules: {
      'react-hooks/exhaustive-deps': 'off',
      'react/react-in-jsx-scope': 'off',
      indent: [1, 2],
      quotes: [1, 'single'],
      semi: [1, 'never'],

      'max-len': [
        1,
        80,
        {
          ignoreComments: true,
          ignoreTrailingComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
          ignorePattern: '^\\s*var\\s.+=\\s*require\\s*\\(',
        },
      ],

      'arrow-parens': [1, 'always'],
      'object-curly-spacing': [1, 'always'],
      'array-bracket-spacing': [1, 'never'],

      'no-multiple-empty-lines': [
        1,
        {
          max: 1,
        },
      ],

      'no-trailing-spaces': [1],

      'no-unused-vars': [
        1,
        {
          args: 'none',
        },
      ],

      'no-console': [1],

      'react/jsx-one-expression-per-line': [
        1,
        {
          allow: 'single-child',
        },
      ],

      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
])
