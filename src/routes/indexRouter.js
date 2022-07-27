import express from 'express';
import template from '../template';

const router = express.Router();

router.get('/', (req, res) => {
  // console.log('GET INDEX -> current session -->>', req.session.username);
  res.send(template({
    path: req.originalUrl,
    usernameSession: { username: req.session?.username, id: req.session?.userId }, // usernameSession -> object, key = username
  })); // Добавляем в темплейт информвацию о сессии для фронт
});

export default router;
