import {
  createUser,
  getAllUser,
  userDeleteById,
  userFindById,
} from "../Service/UserService.js";
import StatusCode from "http-status-codes";

export const saveUser = async (request, response) => {
  try {
    const result = await createUser(request.body);
    response.status(StatusCode.CREATED).json({
      message: "save sucessfully",
      data: result,
    });
  } catch (error) {
    response.status(StatusCode.BAD_REQUEST).json({
      message: "something went worng",
    });
  }
};

export const getUser = async (request, response) => {
  try {
    const users = await getAllUser();
    response.status(StatusCode.OK).json({
      message: "get all data sucessfully",
      data: users,
    });
  } catch (error) {
    response.status(StatusCode.BAD_REQUEST).json({
      message: "something went worng",
    });
  }
};

export const updateUser = async (request, response) => {
  try {
    const usersUpdate = await userFindById(request.params.id, request.body);
    response.status(StatusCode.OK).json({
      message: " data updated sucessfully",
      data: usersUpdate,
    });
  } catch (error) {
    response.status(StatusCode.BAD_REQUEST).json({
      message: "something went worng",
    });
  }
};

export const DeleteUser = async (request, response) => {
  try {
    const DeleteUser = await userDeleteById(request.params.id);
    response.status(StatusCode.OK).json({
      message: " data delete sucessfully",
    });
  } catch (error) {
    response.status(StatusCode.BAD_REQUEST).json({
      message: "something went worng",
    });
  }
};
