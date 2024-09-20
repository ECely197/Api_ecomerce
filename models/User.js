import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstName:  String,
      
    lastName: String,
      
    email:String,
    
    password: String,
     
    addres: String,

    phone: String,
    deletedAt: {
      type: Date,
      default: null,
    },},);

userSchema.virtual("fullName").get(function () {
  return this.firstName + " " + this.lastName;
});

userSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
