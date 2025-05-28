import mongoose, { Schema } from 'mongoose';

const eventSchema = new mongoose.Schema({
    id: { type: String },
    status: { type: String },
    summary: { type: String },
    start: { type: Date },
    end: { type: Date },
    isNotified: { type: Boolean, default: false }
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});





export const EventModel = mongoose.model('Products', eventSchema);
