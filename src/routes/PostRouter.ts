import * as express from "express";
import * as postController from "../controllers/PostController";
import globalErrorHandler from "../utils/GlobalErrorHandler";

const PostRouter = express.Router();


PostRouter.get("/", postController.getallpost, globalErrorHandler);
PostRouter.post("/", postController.createPost, globalErrorHandler);
PostRouter.put("/:id", postController.updatePost, globalErrorHandler);

export default PostRouter;
