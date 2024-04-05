import mongoose from 'mongoose';

const requestModel = new mongoose.Schema({
  product:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  renter:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  from: {
    type: Date,
    required: true
  },
  to: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['confirmed', 'unconfirmed', 'declined'],
    default: 'unconfirmed' // Default status when a request is created
  }

}, { timestamps: true });

// Create the Product model using the schema
export const Request = mongoose.model("Request", requestModel);
