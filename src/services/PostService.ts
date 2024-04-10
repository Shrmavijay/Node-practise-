import { Post } from "../interface/Post.interface";
import prisma from "../config/db";

export const getallPost = async (): Promise<Post[]> => {
  try {
    const getall = await prisma.post.findMany({});
    return getall;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};

export const createdPost = async (post: Post): Promise<Post> => {
  const { id, title, description } = post;
  const savepost = await prisma.post.create({
    data: {
      user_id: id,
      title: title,
      description: description,
    },
  });
  return savepost;
};

export const updatePost = async (id: number, post: Post): Promise<any> => {
  try {
    const { title, description } = post;
    const updatedPost = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        description,
      },
    });
    return updatedPost;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};
