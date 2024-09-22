import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
    min: 0,
  },
  status: {
    type: String,
    enum: ["Pendiente", "Enviado", "Completado", `Cancelado`],
    default: "pending",
  },
  deleteAt: {
    type: Date,
    default: null,
  },
},
{
  timestamps: true,
},
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
