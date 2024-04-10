import { User } from "../models/UserModel";
import prisma from "../config/db";

export const getUsers = async (): Promise<User[]> => {
  try {
    const getall = await prisma.user.findMany({});
    return getall;
  } catch (error) {
    // console.error("Error fetching users:", error);
    throw new Error("Internal Server Error");
  }
};

export const getUserById = async (id: number): Promise<User | null> => {
  try {
    const showuser = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    return showuser;
  } catch (error) {
    // console.error(`Error fetching user with ID ${id}:`, error);
    throw new Error("Internal Server Error");
  }
};

export const createUser = async (user: User): Promise<User> => {
  try {
    const { name, email, age } = user;
    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (findUser) return findUser;
    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        age: age,
      },
    });
    return newUser;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};

export const updateUser = async (id: number, user: User): Promise<any> => {
  try {
    const { name, email, age } = user;
    const Userupdate = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name,
        email,
        age,
      },
    });
    return Userupdate;
  } catch (error) {
    // console.error(`Error updating user with ID ${id}:`, error);
    throw new Error("Internal Server Error");
  }
};

export const deleteUser = async (id: number): Promise<void> => {
  try {
    await prisma.user.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    // console.error(`Error deleting user with ID ${id}:`, error);
    throw new Error("Internal Server Error");
  }
};
