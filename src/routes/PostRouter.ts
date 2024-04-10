import * as express from "express";
import * as postController from "../controllers/PostController";

const PostRouter = express.Router();

PostRouter.get("/", postController.getallpost);
PostRouter.post("/", postController.createPost);
PostRouter.put("/:id", postController.updatePost);

export default PostRouter;
