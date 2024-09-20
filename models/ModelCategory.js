import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    requiered: true,
  },
  description: {
    type: String,
  },
  festivity: {
    type: String,
    requiered: true,
  },

});
const categoryModel = mongoose.model("category", categorySchema);

export default categoryModel;
