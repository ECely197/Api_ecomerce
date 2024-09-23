import bcrypt from "bcryptjs";
import mongoose from "mongoose";

<<<<<<< HEAD
const userSchema = mongoose.Schema(
  {
    username:  String,
   
      
    email:String,
    
    password: String,
     
    addres: String,

    phone: String,
    
    deletedAt: {
      type: Date,
      default: null,
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  },);
=======
const userSchema = mongoose.Schema({
  firstName: String,

  lastName: String,

  email: String,

  password: String,

  addres: String,

  phone: String,
  deletedAt: {
    type: Date,
    default: null,
  },
});
>>>>>>> 4131663a956a3ab2b1086cd97aadc9764f2df134

 
 
  userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
userSchema.virtual("fullName").get(function () {
  return this.firstName + " " + this.lastName;
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  const hash = await bcrypt.hash(user.password, 10);
  user.password = hash;
  next();
})

const User = mongoose.model("User", userSchema);

export default User;
