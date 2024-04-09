import { Request, Response } from "express";
import * as userService from "../services/UserService";
import { User } from "../models/UserModel";
import { StatusCodes } from "http-status-codes";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await userService.getUsers();
    res.status(StatusCodes.CREATED).json({
      message: "Data found sucessfully",
      data: users,
    });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = parseInt(req.params.id);
  try {
    const user = await userService.getUserById(userId);
    if (user) {
      res.status(StatusCodes.CREATED).json({
        message: "User find sucessfully",
        data: user,
      });
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ message: "User not found" });
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newUser: User = req.body;
    const createdUser = await userService.createUser(newUser);
    res.status(StatusCodes.CREATED).json({
      message: "Create user sucessfully",
      data: createdUser,
    });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = parseInt(req.params.id);
  const updatedUser: User = req.body;
  try {
    const user = await userService.updateUser(userId, updatedUser);
    if (user) {
      res.status(StatusCodes.CREATED).json({
        message: "Update user sucessfully",
        data: user,
      });
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ message: "User not found" });
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = parseInt(req.params.id);
  try {
    await userService.deleteUser(userId);
    res.status(StatusCodes.OK).send({
      message: "delete user successful ",
    });
  } catch (error) {
    console.error(`Error deleting user with ID ${userId}:`, error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  }
};
