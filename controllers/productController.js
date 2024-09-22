import Product from "../models/product.js";

export const getAll = async (req, res) => {
  try {
    const products = await Product.find({ deletedAt: null });
    return res.json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving products" });
  }
};

export const getById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product || product.deletedAt) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving product" });
  }
};

export const create = async (req, res) => {
  try {
    const { productID, name, description, price, stock, categoryID } = req.body;

    const newProduct = await Product.create({
      productID,
      name,
      description,
      price,
      stock,
      categoryID,
    });

    console.log("product succesfully created ");

    return res
      .status(201)
      .json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const update = async (req, res) => {
  try {
    const productToUpdate = await Product.findById(req.params.id);

    if (!productToUpdate || productToUpdate.deletedAt) {
      return res.status(404).json({ message: "Product not found" });
    }

    const { productID, name, description, price, stock, categoryID } = req.body;

    Object.assign(productToUpdate, {
      productID: productID || productToUpdate.productID,
      name: name || productToUpdate.name,
      description: description || productToUpdate.description,
      price: price || productToUpdate.price,
      stock: stock || productToUpdate.stock,
      categoryID: categoryID || productToUpdate.categoryID,
    });

    await productToUpdate.save();

    return res.json({
      message: "Product updated successfully",
      product: productToUpdate,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const destroy = async (req, res) => {
  try {
    const productToDelete = await Product.findById(req.params.id);

    if (!productToDelete || productToDelete.deletedAt) {
      return res
        .status(404)
        .json({ message: "Product not found or already deleted" });
    }

    productToDelete.deletedAt = Date.now();
    await productToDelete.save();

    return res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default {
  getAll: getAll,
  getById: getById,
  create: create,
  update: update,
  destroy: destroy,
};
