import "dotenv/config";
import express from "express";
import connectDB from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
app.use(express.json());
connectDB();

//rutas
app.use(userRoutes);
app.use(categoryRoutes);
app.use(productRoutes);
app.use(orderRoutes);

app.listen(3000, () => {
  console.log("El servidor está corriendo en el puerto 3000");
  console.log(process.env.PORT);
});
