import express from "express";
import { auth } from "../middleware/authMiddleware.js";
import { getFavorites, addFavorite, removeFavorite } from "../controllers/favoriteController.js";

const router = express.Router();

// Get favorites from a user
router.get("/", auth, getFavorites);

// Add Favourite
router.post("/", auth, addFavorite);

// Remove Favorite
router.delete("/:id", auth, removeFavorite);

export default router;
