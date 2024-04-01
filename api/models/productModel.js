import mongoose from 'mongoose';

// Define the schema for the Product model
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
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
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  imageURL: {
    type: String,
    required: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  // You can add more fields as needed, such as owner, location, etc.
}, { timestamps: true });

// Create the Product model using the schema
const Product = mongoose.model('Product', productSchema);

export default Product;
