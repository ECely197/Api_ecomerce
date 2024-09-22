import Order from "../models/Order.js";

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({ deleteAt: null });
    return res.json(200).json(orders);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error al buscar todos los pedidos`, error });
  }
};

export const getORderById = async (req, res) => {
  try {
    const orderId = await Order.findById(req.params.id);
    if (!orderId || orderId.deleteAt) {
      return res.status(404).json({ message: `Pedido no encontrado` });
    }
    return res.status(200).json(orderId);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al buscar el pedido", error });
  }
};
