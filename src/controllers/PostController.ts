import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import globalRequestHandler from "../utils/GlobalRequestHandler";
import * as postService from "../services/PostService";
import { Post } from "../interface/Post.interface";

export const getallpost = globalRequestHandler(
  async (req: Request, res: Response): Promise<void> => {
    const allpost = await postService.getallPost();
    res.status(StatusCodes.OK).json({
      message: "Post found successfully",
      data: allpost,
    });
  }
);

export const createPost = globalRequestHandler(
  async (req: Request, res: Response): Promise<void> => {
    const newPost: Post = req.body;
    const createdPost = await postService.createdPost(newPost);
    res.status(StatusCodes.CREATED).json({
      message: "Create post successfully",
      data: createdPost,
    });
  }
);

export const updatePost = globalRequestHandler(
  async (req: Request, res: Response): Promise<void> => {
    const updateData: Post = req.body;
    const id = parseInt(req.params.id);
    const Postupdate = await postService.updatePost(id, updateData);
    res.status(StatusCodes.CREATED).json({
      message: "update post successfully",
      data: Postupdate,
    });
  }
);
