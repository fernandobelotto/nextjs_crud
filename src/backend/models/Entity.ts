import mongoose from "mongoose";

const EntitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title."],
    maxlength: [20, "title cannot be more than 60 characters"],
  },
  description: {
    type: String,
    required: [true, "Please provide the description"],
    maxlength: [60, "Owner's Name cannot be more than 60 characters"],
  },
  quantity: {
    type: Number,
  },
  isActive: {
    type: Boolean,
  },
  date: {
    type: Date
  }
});

export default mongoose.models.Entity || mongoose.model("Entity", EntitySchema);
