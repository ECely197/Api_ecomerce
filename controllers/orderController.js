import Order from "../models/Order.js";

async function getAllOrders(req, res) {
  try {
    const orders = await Order.find({ deleteAt: null });
    return res.json(200).json(orders);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error al buscar todos los pedidos`, error });
  }
}

async function getORderById(req, res) {
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
}

async function createOrder(req, res) {
  const { user, products, status } = req.body;
  try {
    const newOrder = new Order({
      user,
      products,
      status,
    });
    await newOrder.save();
    return res.status(201).json(newOrder);
  } catch (error) {
    return res.status(500).json({ message: "Error al crear el pedido", error });
  }
}



export default {
  getAllOrders: getAllOrders,
  getORderById: getORderById,
  createOrder: createOrder,
};
