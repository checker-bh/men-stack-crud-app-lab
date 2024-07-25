const express = require('express');
const router = express.Router();
const clothingController = require('../controllers/clothing.js');

// Index Route
router.get('/', clothingController.clothingIndex);

// New Route
router.get('/new', clothingController.clothingNew);

// Create Route
router.post('/', clothingController.clothingCreate);

// Show Route
router.get('/:clothingId', clothingController.clothingShow);

// Edit Route
router.get('/:clothingId/edit', clothingController.clothingEdit);

// Update Route
router.put('/:clothingId', clothingController.clothingUpdate);

// Delete Route
router.delete('/:clothingId', clothingController.clothingDelete);

module.exports = router;
