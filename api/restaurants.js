// api/restaurants.js
const express = require('express');
const router = express.Router();
const restaurants = require('../database/restaurants');

// GET all restaurants
router.get('/', (req, res) => {
res.json(restaurants);
});

// GET restaurant by ID
router.get('/:id', (req, res) => {
const restaurant = restaurants.find(r => r.id === parseInt(req.params.id));
if (!restaurant) {
return res.status(404).json({ error: 'Restaurant not found' });
}
res.json(restaurant);
});

module.exports = router;