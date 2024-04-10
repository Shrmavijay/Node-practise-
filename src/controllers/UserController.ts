import { Request, Response } from "express";
import * as userService from "../services/UserService";
import { User } from "../models/UserModel";
import { StatusCodes } from "http-status-codes";
import globalRequestHandler from "../utils/GlobalRequestHandler";

export const getUsers = globalRequestHandler(
  async (req: Request, res: Response): Promise<void> => {
    const users = await userService.getUsers();
    res.status(StatusCodes.OK).json({
      message: "Data found successfully",
      data: users,
    });
  }
);

export const getUserById = globalRequestHandler(
  async (req: Request, res: Response): Promise<void> => {
    const userId = parseInt(req.params.id);
    const user = await userService.getUserById(userId);
    if (user) {
      res.status(StatusCodes.OK).json({
        message: "User found successfully",
        data: user,
      });
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ message: "User not found" });
    }
  }
);

export const createUser = globalRequestHandler(
  async (req: Request, res: Response): Promise<void> => {
    const newUser: User = req.body;
    const createdUser = await userService.createUser(newUser);
    res.status(StatusCodes.CREATED).json({
      message: "Create user successfully",
      data: createdUser,
    });
  }
);

export const updateUser = globalRequestHandler(
  async (req: Request, res: Response): Promise<void> => {
    const userId = parseInt(req.params.id);
    const updatedUser: User = req.body;
    const user = await userService.updateUser(userId, updatedUser);
    if (user) {
      res.status(StatusCodes.OK).json({
        message: "Update user successfully",
        data: user,
      });
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ message: "User not found" });
    }
  }
);

export const deleteUser = globalRequestHandler(
  async (req: Request, res: Response): Promise<void> => {
    const userId = parseInt(req.params.id);
    await userService.deleteUser(userId);
    res.status(StatusCodes.OK).send({
      message: "Delete user successful",
    });
  }
);
