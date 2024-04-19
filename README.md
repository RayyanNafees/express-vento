# Express Vento

An Experimental Express.js template engine for Vento

## :warning: Supports ES Modules syntax only

---

## Installation

```sh
npm install express-vento
```

## Usage

Set the `'view engine'` to `ventoEngine` inside `index.js`

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

## Roadmap

- [ ] Tests
- [ ] TypeScript first
- [ ] CommonJS Support
- [ ] Vento Plugin Support