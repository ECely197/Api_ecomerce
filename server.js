import "dotenv/config";
import express from "express";
import connectDB from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import pedidoRoutes from "./routes/pedidoRoutes.js";


const app = express();
app.use(express.json());
connectDB();

//rutas
app.use(userRoutes);
app.use(categoryRoutes);
app.use(productRoutes);
app.use(pedidoRoutes);


app.listen(3000, () => {
  console.log("El servidor está corriendo en el puerto 3000");
  console.log(process.env.PORT);
});
