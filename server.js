import "dotenv/config";
import express from "express";
import connectDB from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
<<<<<<< HEAD
import pedidoRoutes from "./routes/pedidoRoutes.js";
import authRoutes from "./routes/auth.routes.js"
import {createRoles} from "./libs/initialSetup.js"
=======
import orderRoutes from "./routes/orderRoutes.js";
>>>>>>> 4131663a956a3ab2b1086cd97aadc9764f2df134

const app = express();
createRoles()
app.use(express.json());
connectDB();

//rutas
app.use(userRoutes);
app.use(categoryRoutes);
app.use(productRoutes);
<<<<<<< HEAD
app.use(pedidoRoutes);
app.use(authRoutes)
=======
app.use(orderRoutes);
>>>>>>> 4131663a956a3ab2b1086cd97aadc9764f2df134

app.listen(3000, () => {
  console.log("El servidor está corriendo en el puerto 3000");
  console.log(process.env.PORT);
});
