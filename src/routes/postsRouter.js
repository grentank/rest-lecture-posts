import express from 'express';
import template from '../template';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(template({
    path: req.originalUrl,
    usernameSession: req.session?.username,
  }));
});

export default router;
