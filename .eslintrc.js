module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
    },
    "extends": ["eslint:recommended", "google"],
    "parserOptions": {
        "ecmaFeatures": {
            "ecmaVersion": 6,
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    "rules": {
        'require-jsdoc': 0,
        'react/jsx-uses-vars': 2,
        'react/jsx-uses-react': 2,
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
};