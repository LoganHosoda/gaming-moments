import express from 'express';

import { signin, signup, googlesignin } from '../controllers/user.js';

const router = express.Router();

  router.post('/signin', signin);
  router.post('/signup', signup);
  router.post('/googlesignin', googlesignin);

export default router;