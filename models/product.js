import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productID:  String,
      
    name:  String,
      
    description: String,
      
    price:  Number,
      
    stock: Number,
      
   // categoryID: {
    //  type: mongoose.Schema.Types.ObjectId, //  Reference to the Category model
     // ref: "Category", //  Assuming a "Category" model exists
      // required: true,
    },
  //},
  {
    timestamps: true, 
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
