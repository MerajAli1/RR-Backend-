import { Router } from "express";
import { upload } from "../middlewares/Multer.middleware.js";
import { curoselImages, getCuroselImages } from "../controllers/Curosel.controler.js";

const router = Router()
router.route('/curosel').post(upload.fields(
    [
        {
            name : "image1",
            maxCount: 1
        },
        {
            name : "image2",
            maxCount: 1
        },
        {
            name : "image3",
            maxCount: 1
        }
    ]
),curoselImages)
router.route('/getCurosel').get(getCuroselImages)

export default router