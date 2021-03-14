const express = require('express');
const router = express.Router();
const postsService = require('../service/postsService');

router.get('/posts', async (request, response, next) => {
  try {
    const posts = await postsService.getPosts();
    response.json(posts);
  } catch (error) {
    next(error);
  }
});

router.post('/posts', async (request, response, next) => {
  const post = request.body;

  try {
    const newPost = await postsService.savePost(post);
    response.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
});

router.put('/posts/:id', async (request, response, next) => {
  const post = request.body;
  const { id } = request.params;

  try {
    await postsService.updatePost(id, post);
    response.status(204).end();
  } catch (error) {
    next();
  };
});

router.delete('/posts/:id', async (request, response, next) => {
  const { id } = request.params;

  try {
    await postsService.deletePost(id);
    response.status(204).end();
  } catch (error) {
    next();
  }
});

module.exports = router;