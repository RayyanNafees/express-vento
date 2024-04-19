# Express Vento

An Experimental Express.js template engine for Vento

## :warning: Supports ES Modules syntax only
Vento only exports is functions as ESM being developed for Deno, will need to fork the repo or make it compatible with CJS syntax
For now u need to set `"type": "module"` in package.json or import within `.mjs` files to use the library

---

## Installation

```sh
npm install express-vento
```

## Usage

Set the `'view engine'` to `ventoEngine` inside your ex=ntry file

```js
// index.js

import express from 'express';
import ventoEngine from 'express-vento';

const app = express();
app.set('views', './views');

app.engine('vto', ventoEngine);
app.set('view engine', 'vto'); 

app.get('/', (req, res) => {
  res.render('index', { title: 'Vento', body: 'Hello world!' });
});

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);

```

Then create a sample `views/index.vto` file

```handlebars
<!-- views/index.vto -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{title}}</title>
</head>
<body>
  <h1>{{heading}}</h1>
</body>
</html>
```

## DIY

You really don't need this package, create & customise one yourself this way

```js
// index.js

import express from 'express';
import vento from 'ventojs';

const app = express();
app.set('views', './views');

app.engine('vto', (filePath, options, callback) =>
  vento()
    .run(filePath, options)
    .then(({ content }) => callback(null, content))
    .catch((err) => callback(err))
);
app.set('view engine', 'vto'); 

app.get('/', (req, res) => {
  res.render('index', { title: 'Vento', body: 'Hello world!' });
});

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);

```
Enjoy ! PRs welcomed :)

## Roadmap

- [ ] Tests
- [ ] TypeScript first
- [ ] CommonJS Support
- [ ] Vento Plugin Support
