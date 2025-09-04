import express from "express"
import { getPhoto } from "../controllers/getPhotos.js";

const router = express.Router();

router.get("/", getPhoto)

export default router