import * as express from "express";
import * as userController from "../controllers/UserController";
import globalErrorHandler from "../utils/GlobalErrorHandler";

const UserRouter = express.Router();

UserRouter.get("/", userController.getUsers,globalErrorHandler);
UserRouter.get("/:id", userController.getUserById,globalErrorHandler);
UserRouter.post("/", userController.createUser,globalErrorHandler);
UserRouter.put("/:id", userController.updateUser,globalErrorHandler);
UserRouter.delete("/:id", userController.deleteUser,globalErrorHandler);

export default UserRouter;
