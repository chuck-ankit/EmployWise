import express, { Router } from 'express';
import { register, login, getProfile } from '../controllers/authController';
import { protect } from '../middleware/auth';

const router: Router = express.Router();

router.post('/register', register as express.RequestHandler);
router.post('/login', login as express.RequestHandler);
router.get('/me', protect as express.RequestHandler, getProfile as express.RequestHandler);

export default router; 