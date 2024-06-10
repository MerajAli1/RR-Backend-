import { Router } from "express";
import { getOrder, orderPlaced } from "../controllers/Order.controller.js";


const router = Router()

router.route("/checkout").post(orderPlaced)
router.route("/getOrder").get(getOrder)
export default router;