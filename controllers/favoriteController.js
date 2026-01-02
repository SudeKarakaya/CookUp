import { FavoriteModel } from "../models/favorite.js";

export const getFavorites = async (req, res) => {
  const favorites = await FavoriteModel.getFavorites(req.user.email);
  res.json(favorites);
};

export const addFavorite = async (req, res) => {
  await FavoriteModel.addFavorite(req.user.email, req.body);
  res.json({ message: "Added to favorites" });
};

export const removeFavorite = async (req, res) => {
  await FavoriteModel.removeFavorite(req.user.email, req.params.id);
  res.json({ message: "Removed" });
};
