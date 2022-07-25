import express from 'express';
import { Post } from '../db/models';

const router = express.Router();

router.get('/posts', async (req, res) => {
  const posts = await Post.findAll({ order: [['updatedAt', 'DESC']] });
  res.json(posts);
});

router.post('/posts', async (req, res) => {
  await Post.create(req.body);
  const posts = await Post.findAll({ order: [['updatedAt', 'DESC']] });
  res.json(posts);
});

router.delete('/posts/:id', async (req, res) => {
  await Post.destroy({ where: { id: parseInt(req.params.id) } });
  const posts = await Post.findAll({ order: [['updatedAt', 'DESC']] });
  res.json(posts);
});

router.patch('/posts/:id', async (req, res) => {
  await Post.update(req.body, { where: { id: parseInt(req.params.id) } });
  res.sendStatus(200);
});

export default router;
