import { FavoriteModel } from "../models/favorite.js";

// Get favorites from a user
export const getFavorites = async (req, res) => {
  const favorites = await FavoriteModel.getFavorites(req.user.email);
  res.json(favorites);
};

// Add Favourite
export const addFavorite = async (req, res) => {
  await FavoriteModel.addFavorite(req.user.email, req.body);
  res.json({ message: "Added to favorites" });
};

// Remove Favorite
export const removeFavorite = async (req, res) => {
  await FavoriteModel.removeFavorite(req.user.email, req.params.id);
  res.json({ message: "Removed" });
};
