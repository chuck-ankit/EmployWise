import express, { Router } from 'express';
import { getUsers, getUserById, updateUser, deleteUser } from '../controllers/userController';
import { protect, authorize } from '../middleware/auth';

const router: Router = express.Router();

router.use(protect as express.RequestHandler); // Protect all routes

router.get('/', authorize('admin') as express.RequestHandler, getUsers as express.RequestHandler);
router.get('/:id', getUserById as express.RequestHandler);
router.put('/:id', authorize('admin') as express.RequestHandler, updateUser as express.RequestHandler);
router.delete('/:id', authorize('admin') as express.RequestHandler, deleteUser as express.RequestHandler);

export default router; 