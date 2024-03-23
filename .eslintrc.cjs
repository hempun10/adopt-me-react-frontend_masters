module.exports = {
  root: true,
  env: {
    browser: true, es2020: true, "es6": true,
    "browser": true,
    "node": true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest', sourceType: 'module', "ecmaVersion": 2022,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', "react", "import", "jsx-a11y"],
  rules: {
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  "import/resolver": {
    "node": {
      "extensions": [".js", ".jsx"]
    }
  }

}
