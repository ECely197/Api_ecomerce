import "dotenv/config";
import User from "../models/User.js";
import connectDB from "../config/database.js";

connectDB();

async function userSeeder() {
  await User.create({
    name: "Carlos Barragan",
    email: "Carlos@starwars.com",
    password: process.env.SEEDER_USER_PASSWORD,
    phone: 1323123,
    address: 1239120341,
  });

  console.log("[Seeder] User created!");
  process.exit(1);
}

userSeeder();
