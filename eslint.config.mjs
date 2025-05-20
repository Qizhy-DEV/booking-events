import next from 'eslint-config-next';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    next(),
    {
        rules: {
            'no-unused-vars': 'error', // ❗ Raise error for unused variables
            'prettier/prettier': 'error', // Prettier errors shown in ESLint
        },
        plugins: {
            prettier: eslintPluginPrettier,
        },
    },
    eslintConfigPrettier,
];
