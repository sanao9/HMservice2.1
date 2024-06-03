// routes/appointmentRoutes.js
const express = require("express");
const router = express.Router();
const {
  createAppointment,
  getAppointments,
  getAppointmentById,
  deleteAppointment,
  updateAppointment,
} = require("../controllers/appoinmentController");
const { isAuthenticated } = require("../middleware/auths");

router.post("/", isAuthenticated, createAppointment);
router.get("/", isAuthenticated, getAppointments);
router.get("/:id", isAuthenticated, getAppointmentById);
router.put("/:id", isAuthenticated, updateAppointment);
router.delete("/:id", isAuthenticated, deleteAppointment);

module.exports = router;
