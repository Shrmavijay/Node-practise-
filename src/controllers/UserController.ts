// src/controllers/userController.ts
import { Request, Response } from 'express';
import * as userService from '../services/UserService';
// import from '../services/UserService';
import { User } from '../models/UserModel';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const userId = parseInt(req.params.id);
  try {
    const user = await userService.getUserById(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(`Error fetching user with ID ${userId}:`, error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const newUser: User = req.body;
  try {
    const createdUser = await userService.createUser(newUser);
    res.status(201).json(createdUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const userId = parseInt(req.params.id);
  const updatedUser: User = req.body;
  try {
    const user = await userService.updateUser(userId, updatedUser);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(`Error updating user with ID ${userId}:`, error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const userId = parseInt(req.params.id);
  try {
    await userService.deleteUser(userId);
    res.status(204).send();
  } catch (error) {
    console.error(`Error deleting user with ID ${userId}:`, error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
