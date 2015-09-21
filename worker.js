import express from 'express';
import marked from 'marked';
import renderer from './renderer';
import { readFile } from 'fs';
import { join, resolve } from 'path';
const app = express();
const port = 3000;

// setting jade view engine for the page rendering
app.set('views', join(__dirname, './views'));
app.set('view engine', 'jade');

app.get('/', (req, res) => {
  readFile(resolve('docs', 'readme.md'), 'utf8', (err, data) => {
    if (err) {
      return void res.status(500).end(String(err));
    }

    const html = marked(data, {renderer: renderer});
    res.render('index', {innerHtml: html});
  });
});

app.listen(port, () => console.log(`listening ${port}`));
