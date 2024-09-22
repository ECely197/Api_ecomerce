import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
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
});
const categoryModel = mongoose.model("category", categorySchema);

export default categoryModel;
