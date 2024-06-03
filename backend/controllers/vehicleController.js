

const Vehicle = require('../models/vehicle');
const User = require('../models/user');

exports.createVehicle = async (req, res) => {
  try {
    const { make, model, vin } = req.body;

    const newVehicle = new Vehicle({
      make,
      model,
      vin,
      owner: req.user._id,
    });

    await newVehicle.save();
    res.status(201).json(newVehicle);
  } catch (error) {
    console.error("Error creating vehicle:", error);
    res.status(400).json({ message: error.message });
  }
};

exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find().populate('owner', 'name email');
    res.status(200).json(vehicles);
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.getAllUserVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find({ owner: req.user._id }).populate('owner', 'name email');
    res.status(200).json(vehicles);
  } catch (error) {
    console.error("Error fetching user's vehicles:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id).populate('owner', 'name email');
    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }
    res.status(200).json(vehicle);
  } catch (error) {
    console.error("Error fetching vehicle:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate('owner', 'name email');
    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }
    res.status(200).json(vehicle);
  } catch (error) {
    console.error("Error updating vehicle:", error);
    res.status(400).json({ message: error.message });
  }
};

exports.deleteVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting vehicle:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
exports.getAllVehiclesForAdmin = async (req, res) => {
  try {
    const vehicles = await Vehicle.find().populate('owner', 'name email');
    console.log("All vehicles for admin:", vehicles);
    res.status(200).json(vehicles);
  } catch (error) {
    console.error("Error fetching all vehicles for admin:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
};