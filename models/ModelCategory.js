import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
<<<<<<< HEAD
  name:  String,
  description: String,
  festivity: String,
  deletedAt: {
    type: Date,
    default: null,
  }

},
{
  timestamps: true, 
=======
  name: {
    type: String,
    requiered: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  festivity: {
    type: String,
    requiered: true,
  },
  deleteAt: {
    type: Date,
    default: Date.now,
  },
  timestamps: true,
  isActive: {
    type: Boolean,
    default: true,
  },
>>>>>>> 4131663a956a3ab2b1086cd97aadc9764f2df134
});
const categoryModel = mongoose.model("category", categorySchema);

export default categoryModel;
