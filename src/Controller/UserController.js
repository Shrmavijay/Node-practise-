import {
  createUser,
  getAllUser,
  userDeleteById,
  userFindById,
} from "../Service/UserService.js";
import StatusCode from "http-status-codes";
import globalRequestHandler from "../utils/catchAsync.js";

export const saveUser = globalRequestHandler(async (request, response) => {
  const { name, email, age } = request.body;
  const result = await createUser({ name, email, age });
  response.status(StatusCode.CREATED).json({
    message: "save sucessfully",
    data: result,
  });
});

export const getUser = globalRequestHandler(async (request, response) => {
  const users = await getAllUser();
  response.status(StatusCode.OK).json({
    message: "get all data sucessfully",
    data: users,
  });
});

export const updateUser = globalRequestHandler(async (request, response) => {
  const id = request.params.id;
  const body = request.body;
  const usersUpdate = await userFindById({ id, body });
  if (usersUpdate !== null) {
    response.status(StatusCode.OK).json({
      message: " user updated sucessfully",
      data: usersUpdate,
    });
  } else {
    response.status(StatusCode.NOT_FOUND).json({
      message: "User not found",
    });
  }
});

export const DeleteUser = globalRequestHandler(async (request, response) => {
  // try {
  const id = request.params.id;
  const DeleteUser = await userDeleteById(id);
  if (DeleteUser !== null) {
    response.status(StatusCode.OK).json({
      message: " user deleted sucessfully",
      data: DeleteUser,
    });
  } else {
    response.status(StatusCode.NOT_FOUND).json({
      message: "User not found",
    });
  }
});
