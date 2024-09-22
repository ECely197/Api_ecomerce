import Order from "../models/Order.js";

export const getAllOrders = async (req, res) =>{
try {
    const orders = await Order.find({ deleteAt: null});
    return res.json(200).json(orders);
}catch (error) {
    return res.status(500).json({message: `Error al obtener los pedidos`, error});
};
};