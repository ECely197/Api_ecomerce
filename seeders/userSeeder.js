import "dotenv/config";
import User from "../models/User.js";
import connectDB from "../config/database.js";
import { ROLES } from "../models/Role.js";

connectDB();

async function userSeeder() {
  await User.create({
    firstName: "Carlos",
    lastName: "Barragan",
    email: "Carlos@starwars.com",
    password: process.env.SEEDER_USER_PASSWORD,
    phone: 1323123,
    address: 1239120341,
    roles: [
      "admin"
    ]
  });

  console.log("[Seeder] User created!");
  process.exit(1);
}

userSeeder();
