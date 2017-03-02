# babel-plugin-transform-snakecase

Transform snake_cased JS to camelCased.

## Example

**In**

```js
// input code
```

**Out**

```js
"use strict";

// output code
```

## Installation

```sh
$ npm install babel-plugin-transform-snakecase
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-snakecase"]
}
```

### Via CLI

```sh
$ babel --plugins transform-snakecase script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-snakecase"]
});
```
