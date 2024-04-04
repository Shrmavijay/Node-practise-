import express from "express";
import {
  DeleteUser,
  getUser,
  saveUser,
  updateUser,
} from "../Controller/UserController.js";
const UserRouter = express.Router();

UserRouter.post("/addUser", saveUser);
UserRouter.get("/getUser", getUser);
UserRouter.put("/updateUser/:id", updateUser);
UserRouter.delete("/DeleteUser/:id", DeleteUser);

export default UserRouter;
