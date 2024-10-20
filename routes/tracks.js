import { Router } from "express";
import * as controllers from "../controllers/tracks.js"


const router = Router();
// routes go here


router.get("/", controllers.getTracks);

export default router;