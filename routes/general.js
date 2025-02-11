import { authMiddleware } from "../middleware/auth.js";
import express from "express";
import { getAvailableSlots, bookAppointment, getStudentAppointments, getAvailableSlotsByDate } from "../controllers/general.js";

const router = express.Router();

// Route for fetching professor's available slots
router.get("/professor/:professorId/availability", authMiddleware, getAvailableSlots);

// Route for booking an appointment
router.post('/book', authMiddleware, bookAppointment);

// Route for fetching student appointments
router.get('/appointments', authMiddleware, getStudentAppointments);

// Route for fetching available slots by specific date (YYYY-MM-DD)
router.get('/professor/:professorId/availability/:date', authMiddleware, getAvailableSlotsByDate);

export default router;