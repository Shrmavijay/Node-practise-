import { User } from "../interface/User.interface";
import prisma from "../config/db";

export const getUsers = async (): Promise<User[]> => {
  try {
    const getall = await prisma.users.findMany({
      include: {
        Post: {
          select: {
            title: true,
            description: true,
          },
        },
      },
    });
    return getall;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};

export const getUserById = async (id: number): Promise<User | null> => {
  try {
    const showuser = await prisma.users.findFirst({
      where: {
        id: id,
      },
    });
    return showuser;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};

export const createUser = async (user: User): Promise<User> => {
  try {
    const { name, email, age } = user;
    const findUser = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });
    if (findUser) return findUser;
    const newUser = await prisma.users.create({
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
    const Userupdate = await prisma.users.update({
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
    throw new Error("Internal Server Error");
  }
};

export const deleteUser = async (id: number): Promise<void> => {
  try {
    await prisma.users.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};
