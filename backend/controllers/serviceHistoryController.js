const ServiceHistory = require('../models/serviceHistory');

exports.addServiceHistory = async (req, res) => {
  try {
    const { vehicle, user, serviceDate, details } = req.body;
    const newServiceHistory = new ServiceHistory({ vehicle, user, serviceDate, details });
    await newServiceHistory.save();
    res.status(201).json(newServiceHistory);
  } catch (error) {
    console.error('Error adding service history:', error);
    res.status(400).json({ message: error.message });
  }
};

exports.getServiceHistory = async (req, res) => {
  try {
    const serviceHistory = await ServiceHistory.find().populate('vehicle', 'make model').populate('user', 'name email');
    res.status(200).json(serviceHistory);
  } catch (error) {
    console.error('Error fetching service history:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
