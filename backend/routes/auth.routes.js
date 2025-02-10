import express from "express";
import { getMe,signup, signin, signout } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/me",protectRoute,getMe)

router.post("/signup", signup);

router.post("/signin", signin);

router.post("/signout", signout);

export default router;
