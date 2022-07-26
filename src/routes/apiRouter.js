import express from 'express';
import bcrypt from 'bcrypt';
import { Post, User } from '../db/models';

const router = express.Router();

router.get('/posts', async (req, res) => {
  const posts = await Post.findAll({
    include: { model: User },
    order: [['updatedAt', 'DESC']],
  });
  res.json(posts);
});

router.post('/posts', async (req, res) => {
  const currentUser = await User.findOne({ where: { username: req.body.username } }); // Находим User по его uesrname из клиента
  await Post.create({ title: req.body.title, body: req.body.body, user_id: currentUser.id });
  const posts = await Post.findAll({
    include: { model: User }, // Добавляем модель User, чтоб сделать выемку из таблиц с юзерами
    order: [['updatedAt', 'DESC']],
  });
  res.json(posts);
});

router.delete('/posts/:id', async (req, res) => {
  await Post.destroy({ where: { id: parseInt(req.params.id) } });
  const posts = await Post.findAll({
    include: { model: User },
    order: [['updatedAt', 'DESC']],
  });
  res.json(posts);
});

router.patch('/posts/:id', async (req, res) => {
  await Post.update(req.body, { where: { id: parseInt(req.params.id) } });
  res.sendStatus(200);
});

router.post('/users', async (req, res) => {
  const hashpass = await bcrypt.hash(req.body.password, 10);
  const [currentUser, created] = await User.findOrCreate({
    where: {
      username: req.body.username,
      hashpass,
    },
  });
  req.session.username = currentUser.username; // Сохраняем в сессию какую-то информацию и актвиируем её
  req.session.userId = currentUser.id;
  res.json({ username: currentUser.username });
});

router.get('/logout', (req, res) => {
  res.clearCookie('user_sid'); // Удалить куку
  req.session.destroy(); // Завершить сессию
  res.sendStatus(200);
});

export default router;
