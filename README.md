# eslint-plugin-lodash-import-method

- import lodash submodule only with `auto fix`

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-lodash-import-method`:

```sh
npm install eslint-plugin-lodash-import-method --save-dev
```

## Usage

Add `lodash-import-method` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "lodash-import-method"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "lodash-import-method/submodule": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


