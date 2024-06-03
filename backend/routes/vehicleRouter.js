const express = require('express');
const router = express.Router();
const { createVehicle, getVehicleById, updateVehicle, deleteVehicle, getAllUserVehicles, getAllVehiclesForAdmin } = require('../controllers/vehicleController');
const { isAuthenticated, isAdmin } = require('../middleware/auths'); // Ensure you have an isAdmin middleware

router.post('/', isAuthenticated, createVehicle);
router.get('/', isAuthenticated, getAllUserVehicles);
router.get('/admin', isAuthenticated, isAdmin, getAllVehiclesForAdmin); // New route for admin
router.get('/:id', isAuthenticated, getVehicleById);
router.put('/:id', isAuthenticated, updateVehicle);
router.delete('/:id', isAuthenticated, deleteVehicle);

module.exports = router;
