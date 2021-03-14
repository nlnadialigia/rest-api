const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.use(express.json());
app.use('/', require('./route/postsRoute'));

app.use(function (error, request, response, next) {
  if (error.message === 'Post already exists!') {
    return response.status(409).send(error.message);
  };

  if (error.message === 'Post not found') {
    return response.status(404).send(error.message);
  };

  response.status(500).send(error.message);
});

app.listen(3390);