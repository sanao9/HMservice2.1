const express = require('express');
const router = express.Router();
const { addServiceHistory, getServiceHistory } = require('../controllers/serviceHistoryController');
const { isAuthenticated, isAdmin } = require('../middleware/auths');

router.post('/', isAuthenticated, isAdmin, addServiceHistory);
router.get('/', isAuthenticated, getServiceHistory);

module.exports = router;
