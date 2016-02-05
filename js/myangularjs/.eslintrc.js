module.exports = {
    "rules": {
        "indent": [
            2,
            4
        ],
        "quotes": [
            2,
            "double"
        ],
        "linebreak-style": [
            2,
            "unix"
        ],
        "semi": [
            2,
            "always"
        ],
        "no-undef": 1
    },
    "env": {
        "es6": true,
        "browser": true
    },
    "extends": "eslint:recommended",
    "ecmaFeatures": {
        "jsx": true
    },
    
    "globals": {
        "module": false,
        "require": false,
        "jasmine": false,
        "describe": false,
        "it": false,
        "expect": false,
        "beforeEach": false,
        "afterEach": false
    }
    
};