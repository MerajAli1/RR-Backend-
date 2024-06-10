import { Router } from "express";
import { ContactMessage, getContactMessage } from "../controllers/ContactController.js";

const router = Router()

router.route("/contact").post(ContactMessage)
router.route("/getContact").get(getContactMessage)

export default router