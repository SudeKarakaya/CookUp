import express from "express";
import { auth } from "../middleware/authMiddleware.js";
import { getFavorites, addFavorite, removeFavorite } from "../controllers/favoriteController.js";

const router = express.Router();

router.get("/", auth, getFavorites);
router.post("/", auth, addFavorite);
router.delete("/:id", auth, removeFavorite);

export default router;
