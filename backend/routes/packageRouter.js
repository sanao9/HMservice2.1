
const express = require('express');
const router = express.Router();
const { createPackage, getPackages, getPackageById, updatePackage, deletePackage } = require('../controllers/packageController');
const { isAuthenticated, isAdmin } = require('../middleware/auths');
const upload = require('../Config/multerConfig');

router.post('/', isAuthenticated, isAdmin, upload.single('image'), createPackage);
router.get('/', getPackages);
router.get('/:id', getPackageById);
router.put('/:id', isAuthenticated, isAdmin, upload.single('image'), updatePackage);
router.delete('/:id', isAuthenticated, isAdmin, deletePackage);

module.exports = router;
