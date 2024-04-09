// src/routes/userRoutes.ts
import * as express from 'express';
import * as userController from '../controllers/UserController';

const router = express.Router();

router.get('/users', userController.getUsers);
router.get('/user/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

export default router;
