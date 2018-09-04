/* eslint-env node */
const express = require('express'); // eslint-disable-line import/no-extraneous-dependencies
const serveStatic = require('serve-static'); // eslint-disable-line import/no-extraneous-dependencies
const path = require('path');

const app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port);
