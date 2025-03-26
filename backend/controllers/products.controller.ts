import { ObjectId } from "mongodb";
import { client, collection } from "../config/db.ts";

export const createProduct = async (req, res) => {
  try {
    const product = req.body;
    if (!product.name || !product.price || !product.image) {
      res
        .status(400)
        .json({ success: false, message: "All fields are required" });
      return;
    }
    const timestamp = new Date();

    product.createdAt = timestamp;
    product.updatedAt = timestamp;

    await collection.insertOne(product);
    res.status(201).json({
      success: true,
      message: "Product created successfully",
    });
  } catch (error) {}
};

export const readProducts = async (req, res) => {
  try {
    const products = await collection.find({}).toArray();
    res.status(200).json({
      success: true,
      message: "Products retrieved successfully",
      data: products,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error retrieving products", error });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const newProduct = req.body;

  newProduct.updatedAt = new Date();

  try {
    const result = await collection.updateOne(
      { _id: ObjectId.createFromHexString(id) },
      { $set: newProduct }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating product",
      error: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid product ID format",
    });
  }

  try {
    const result = await collection.deleteOne({
      _id: ObjectId.createFromHexString(id),
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting product",
      error: error.message,
    });
  }
};
