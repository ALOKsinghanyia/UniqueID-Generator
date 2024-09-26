const mongoose = require('mongoose');

const uniqueIdSchema = new mongoose.Schema({
    uniqueId: {
        type: String,
        unique: true,   // Enforce uniqueness at the database level
        required: true,
        minlength: 10   // Enforce minimum 10-digit length
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('UniqueId', uniqueIdSchema);
