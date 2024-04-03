import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  photos: {
    type: [String],
    required: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  // You can add more fields as needed, such as owner, location, etc.
}, { timestamps: true });

// Create the Product model using the schema
export const Product = mongoose.model("Product", productSchema);
