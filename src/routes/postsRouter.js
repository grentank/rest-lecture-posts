import express from 'express';
import template from '../template';

const router = express.Router();

router.get('/', (req, res) => {
  // console.log('GET -> /POSTS -> SESSION', req.session.username);
  res.send(template({
    path: req.originalUrl,
    usernameSession: { username: req.session?.username, id: req.session?.id },
  })); // usernameSession -> object, key = username
});

export default router;
