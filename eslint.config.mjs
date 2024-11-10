import js from '@eslint/js'
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import tseslint from 'typescript-eslint'
import jestEslintPlugin from 'eslint-plugin-jest'

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    ignores: [
      'dist',
      'node_modules',
      'test/**',
      '*.spec.ts',
      '.idea',
      '.local/',
      'coverage',
      '*.json',
      '*.config.js',
      'eslint.config.mjs',
      '.local/*'
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unnecessary-condition': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/strict-boolean-expressions': 'warn',
      '@typescript-eslint/no-extraneous-class': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/strict-boolean-expressions': 'warn'
    }
  },
  {
    extends: [
      js.configs.recommended,
      jestEslintPlugin.configs['flat/recommended']
    ],
    files: ['**/*.spec.ts', '**/*.test.ts'],
    rules: {
      ...jestEslintPlugin.configs['flat/recommended'].rules
    }
  },
  pluginPrettierRecommended
)
