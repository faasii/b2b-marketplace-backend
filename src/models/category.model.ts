// models/Category.js
import mongoose from 'mongoose';

const attributeSchemaDefinition = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  key: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['enum', 'range', 'boolean', 'text']
  },
  options: {
    type: [String],
  },
  min: {
    type: Number,
  },
  max: {
    type: Number,
  }
}, { _id: false });

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers and hyphens']
  },
  attributeSchema: {
    type: [attributeSchemaDefinition],
    required: true,
  }
}, { timestamps: true });

// Index for faster slug lookup
categorySchema.index({ slug: 1 });

export default mongoose.model('Category', categorySchema);