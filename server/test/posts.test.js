/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const crypto = require('crypto');
const axios = require('axios');
const postsService = require('../service/postsService');

const generate = () => {
  return crypto.randomBytes(20).toString('hex');
};

const request = function (url, method, data) {
  return axios({ url, method, data, validateStatus: false });
};

test('should get posts', async () => {
  const post1 = await postsService.savePost({ title: generate(), content: generate() });
  const post2 = await postsService.savePost({ title: generate(), content: generate() });
  const post3 = await postsService.savePost({ title: generate(), content: generate() });
  const response = await request('http://localhost:3390/posts', 'get');

  expect(response.status).toBe(200);

  const posts = response.data;

  expect(posts).toHaveLength(3);

  await postsService.deletePost(post1.id);
  await postsService.deletePost(post2.id);
  await postsService.deletePost(post3.id);
});

test('should save post', async () => {
  const data = { title: generate(), content: generate() };
  const response = await request('http://localhost:3390/posts', 'post', data);
  const post = response.data;

  expect(response.status).toBe(201);

  expect(post.title).toBe(data.title);
  expect(post.content).toBe(data.content);

  await postsService.deletePost(post.id);
});

test('should not save a post', async () => {
  const data = { title: generate(), content: generate() };

  const response1 = await request('http://localhost:3390/posts', 'post', data);
  const response2 = await request('http://localhost:3390/posts', 'post', data);

  expect(response2.status).toBe(409);

  const post = response1.data;

  await postsService.deletePost(post.id);
});

test('should update post', async () => {
  const post = await postsService.savePost({ title: generate(), content: generate() });
  post.title = generate();
  post.content = generate();
  const response = await request(`http://localhost:3390/posts/${post.id}`, 'put', post);

  expect(response.status).toBe(204);

  const updatePost = await postsService.getPost(post.id);

  expect(updatePost.title).toBe(post.title);
  expect(updatePost.content).toBe(post.content);

  await postsService.deletePost(post.id);
});

test('should not update post', async () => {
  const post = {
    id: 1
  };

  const response = await request(`http://localhost:3390/posts/${post.id}`, 'put', post);

  expect(response.status).toBe(404);
});

test('should delete post', async () => {
  const post = await postsService.savePost({ title: generate(), content: generate() });
  const response = await request(`http://localhost:3390/posts/${post.id}`, 'delete');

  const posts = await postsService.getPosts();

  expect(response.status).toBe(204);

  expect(posts).toHaveLength(0);
});