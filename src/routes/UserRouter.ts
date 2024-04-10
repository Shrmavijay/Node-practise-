import * as express from "express";
import * as userController from "../controllers/UserController";

const UserRouter = express.Router();

UserRouter.get("/", userController.getUsers);
UserRouter.get("/:id", userController.getUserById);
UserRouter.post("/", userController.createUser);
UserRouter.put("/:id", userController.updateUser);
UserRouter.delete("/:id", userController.deleteUser);

export default UserRouter;
