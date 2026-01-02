import express from "express";
import { auth } from "../middleware/authMiddleware.js";
import { setRating, getMyRatings, getMyMealRating } from "../controllers/ratingController.js";

const router = express.Router();

router.post("/", auth, setRating);
router.get("/", auth, getMyRatings);
router.get("/:mealId", auth, getMyMealRating);

export default router;
