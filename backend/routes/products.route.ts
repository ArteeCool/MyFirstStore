import express from "express";
import {
  createProduct,
  readProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller";

const router = express.Router();

router.get("/", createProduct);
router.get("/", readProducts);
router.get("/:id", updateProduct);
router.get("/:id", deleteProduct);

export default router;
