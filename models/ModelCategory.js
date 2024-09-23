import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
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
});
const categoryModel = mongoose.model("category", categorySchema);

export default categoryModel;
