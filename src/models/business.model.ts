// models/Listing.js
import mongoose from 'mongoose';

const businessListingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  attributes: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  }
}, { timestamps: true });

// Text index for search
businessListingSchema.index({ 
  title: 'text', 
  description: 'text' 
});

// Index for category and common filter fields
businessListingSchema.index({ categoryId: 1 });
businessListingSchema.index({ price: 1 });
businessListingSchema.index({ location: 1 });

// Compound index for attribute filtering
// Note: In a real implementation, you'd want to create these dynamically based on your query patterns
businessListingSchema.index({ 'attributes.size': 1 });
businessListingSchema.index({ 'attributes.color': 1 });
businessListingSchema.index({ 'attributes.screenSize': 1 });

export default mongoose.model('Listing', businessListingSchema);