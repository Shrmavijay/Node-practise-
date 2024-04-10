import UserRouter from "./UserRouter";
import PostRouter from "./PostRouter";
import * as express from "express";

const RootRouter = express.Router();

RootRouter.use("/users", UserRouter);
RootRouter.use("/post", PostRouter);

export default RootRouter;
