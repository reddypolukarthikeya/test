import { authMiddleware } from "../middleware/auth.js";
import express from "express"
import {getAvailableSlots, bookAppointment, getStudentAppointments} from "../controllers/general.js"
const router = express.Router();
router.get("/professor/:professorId/availability",authMiddleware,getAvailableSlots);
router.post('/book', authMiddleware, bookAppointment);
router.get('/appointments', authMiddleware, getStudentAppointments);
export default router;