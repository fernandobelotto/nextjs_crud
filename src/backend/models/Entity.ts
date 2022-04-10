import mongoose from "mongoose";

const EntitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title."],
    maxlength: [20, "title cannot be more than 60 characters"],
  },
  description: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  isActive: {
    type: Boolean,
  },
  date: {
    type: String,
  },
});

export default mongoose.models.Entity || mongoose.model("Entity", EntitySchema);
