
const Package = require('../models/package');

exports.createPackage = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const image = req.file ? req.file.path : null;
    const newPackage = new Package({ name, price, description, image });
    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (error) {
    res.status(500).json({ message: 'Error creating package', error });
  }
};

exports.getPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching packages', error });
  }
};

exports.getPackageById = async (req, res) => {
  try {
    const { id } = req.params;
    const package = await Package.findById(id);
    if (!package) return res.status(404).json({ message: 'Package not found' });
    res.status(200).json(package);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching package', error });
  }
};

exports.updatePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description } = req.body;
    const image = req.file ? req.file.path : null;

    const package = await Package.findById(id);
    if (!package) return res.status(404).json({ message: 'Package not found' });

    package.name = name || package.name;
    package.price = price || package.price;
    package.description = description || package.description;
    package.image = image || package.image;

    await package.save();
    res.status(200).json(package);
  } catch (error) {
    res.status(500).json({ message: 'Error updating package', error });
  }
};

exports.deletePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const package = await Package.findById(id);
    if (!package) return res.status(404).json({ message: 'Package not found' });

    await package.remove();
    res.status(200).json({ message: 'Package deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting package', error });
  }
};
