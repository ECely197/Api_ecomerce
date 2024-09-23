import express from "express";
import usersController from "../controllers/usersController.js";
import { isAdmin, verifyToken } from "../middlewares/authJwt.js";
import { checkExistingUser } from "../middlewares/verifySignup.js";
const router = express.Router();


router.get("/api/users", usersController.getAll);
router.get("/api/users/:id", usersController.getById);
router.post("/api/users", usersController.create);
router.patch("/api/users/:id",[verifyToken, isAdmin, checkExistingUser], usersController.update);
router.delete("/api/users/:id",[verifyToken, isAdmin, checkExistingUser], usersController.destroy);


export default  router;