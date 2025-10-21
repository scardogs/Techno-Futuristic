import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema(
  {
    type: { type: String, required: true }, // e.g., menu, event, location, gallery, special, page
    title: { type: String },
    slug: { type: String, index: true },
    description: { type: String },
    price: { type: String },
    date: { type: String },
    image: { type: String },
    order: { type: Number, default: 0 },
    data: { type: mongoose.Schema.Types.Mixed }, // flexible blob
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

ContentSchema.index({ type: 1, slug: 1 });

// Ensure the model is only created once
let Content;
try {
  Content = mongoose.models.Content || mongoose.model("Content", ContentSchema);
} catch (error) {
  // Handle case where mongoose is not available during build
  Content = mongoose.model("Content", ContentSchema);
}

export default Content;
