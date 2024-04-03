import express from "express";
import User from "../Model/User.model.js";
const router = express.Router();

// Create a new user
router.post("/add", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    console.log(req.body);
    res.status(201).json({
      message: "add succesfully",
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a user
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a user
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
