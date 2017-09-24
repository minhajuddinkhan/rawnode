module.exports = {
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "plugins": ["async-await"],
    "extends": "eslint:recommended",
    "rules": {

        "async-await/space-after-async": 2,
        "async-await/space-after-await": 2,
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};