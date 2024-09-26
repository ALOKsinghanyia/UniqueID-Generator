const express = require('express');
const { generateUniqueId } = require('../controllers/uniqueIdController');
const router = express.Router();

// POST /api/ids
router.post('/', generateUniqueId);

module.exports = router;
