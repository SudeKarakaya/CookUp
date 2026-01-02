import express from "express";
import { auth } from "../middleware/authMiddleware.js";
import { setRating, getMyRatings, getMyMealRating } from "../controllers/ratingController.js";

const router = express.Router();

// Create or update a rating for a meal
router.post("/", auth, setRating);

// Get all ratings by a user
router.get("/", auth, getMyRatings);

// Get user's rating of a specific meal
router.get("/:mealId", auth, getMyMealRating);

export default router;
