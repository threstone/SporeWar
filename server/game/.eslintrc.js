module.exports = {
    env: {
        es2020: true,
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    rules: {
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'import/prefer-default-export': 0,
        // camelcase: [1, { properties: 'never' }],
        'class-methods-use-this': 'off',
        'no-underscore-dangle': 'off',
        'linebreak-style': ['off', 'windows'],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'no-undef': 'off',
        'max-len': [1, 150],
        'no-param-reassign': 'off',
        'no-tabs': 'off',
        'no-mixed-spaces-and-tabs': 'off',
        indent: 'off',
        'no-async-promise-executor': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-restricted-syntax': 'off',
        'no-continue': 'off',
        'no-multi-assign': 'off',
        'func-names': 'off',
    },
    ignorePatterns: [
        'node_modules/', // 忽略 node_modules 目录
        'dist/', // 忽略 coverage 目录
        '*.test.ts', // 忽略所有以 .test.js 结尾的文件
        '**/*.js',
        '**/Enum.ts',
        '**/*.d.ts',
    ],
};
