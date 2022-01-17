module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2019, // Node.js 12の場合は2019、他のバージョンのNode.jsを利用している場合は場合は適宜変更する
    },
    plugins: [
    ],
    extends: [
        'eslint:recommended'
    ],
    rules: {
        'comma-dangle': [ // 末尾のカンマ
            'error',
            {
                arrays: 'never',
                functions: 'never',
                imports: 'always-multiline',
                objects: 'always-multiline',
            }
        ],
        eqeqeq: [ // 厳密等価演算子の強制
            'error',
            'always'
        ],
        'jsx-quotes': [
            'error',
            'prefer-double'
        ],
        indent: [
            'error',
            4,
            {
                'MemberExpression': 0,
            }
        ],
        'no-trailing-spaces': [
            'error'
        ],
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'newline-per-chained-call': [
            'error',
            {
                'ignoreChainWithDepth': 2,
            }
        ],
        quotes: [
            'error',
            'single',
            {
                'allowTemplateLiterals': true,
            }
        ],
        semi: [
            'error',
            'always'
        ],
    },
};
