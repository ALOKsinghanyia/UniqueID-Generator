const crypto = require('crypto');
const UniqueIdModel = require('../models/uniqueIdModel');

// Generate a secure, globally unique numeric ID and store in MongoDB
const generateUniqueId = async (req, res, next) => {
    try {
        let uniqueId;

        while (true) {
            const randomBytes = crypto.randomBytes(6); // Secure random bytes
            const randomId = parseInt(randomBytes.toString('hex'), 16).toString().slice(0, 10);

            const existingId = await UniqueIdModel.findOne({ uniqueId: randomId });

            if (!existingId) {
                uniqueId = randomId;
                break;
            }
        }

        const newUniqueId = new UniqueIdModel({ uniqueId });
        await newUniqueId.save();

        res.status(201).json({ uniqueId });
    } catch (error) {
        next(error);
    }
};

module.exports = { generateUniqueId };
