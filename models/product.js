import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productID: String,
    name: String,
    description: String,
    price: Number,
    stock: Number,
    categoryID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
    imagePath: String, // Add this line for the image path
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
