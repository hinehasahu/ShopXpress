import express from "express";
import {
  addProducts,
  deleteProducts,
  getProducts,
  getProductsByCategory,
  getProductsbyId,
  getProductsBySearch,
  updateProducts,
} from "../controllers/productController.js";
import { checkandvalidate } from "../middlewares/ValidateMiddlware.js";

export const ProductRouter = express.Router();

// To get all products
ProductRouter.get("/", getProducts);

// To get product by ID
ProductRouter.get("/:id", getProductsbyId);

// To filter products by category
ProductRouter.get("/category/:category", getProductsByCategory);

// To get products by search term
ProductRouter.get("/search/:term", getProductsBySearch);

// To add products
ProductRouter.post("/", checkandvalidate, addProducts);

// To update a product by id
ProductRouter.put("/:id", updateProducts);

// To delete a product by id
ProductRouter.delete("/:id", deleteProducts);
