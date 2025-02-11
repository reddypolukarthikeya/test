import express from "express";
import { register, login, getUserProfile, resetPassword } from "../controllers/user.js";

const router = express.Router();

// Route for registering a user
router.post("/register", register);

// Route for user login
router.post("/login", login);

// Route for fetching user profile
router.get("/profile/:id", getUserProfile);

// Route for resetting password
router.post("/reset-password", resetPassword);

export default router;
