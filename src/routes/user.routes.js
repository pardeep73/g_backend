import express from 'express';
import { isAunthenticated } from '../middlewares/isAuthenticated.js';
import { Login, Logout, register } from '../controllers/user.controller.js';

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(Login);
router.route('/logout').post(isAunthenticated,Logout);

export default router;