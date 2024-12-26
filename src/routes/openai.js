import express from "express";
import { getmessage, responses } from "../controllers/openai.js";
import { isAunthenticated } from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route('/chatbot').post(isAunthenticated,getmessage);
router.route('/chats').post(isAunthenticated,responses);

export default router;