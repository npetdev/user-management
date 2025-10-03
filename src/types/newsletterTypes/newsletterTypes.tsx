import { ChangeEvent } from "react";

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};
export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
export type PostsListProps = {
  posts: Post[];
  setPost: (id: number) => void;
};

export type CommentsListProps = {
  comments: Comment[];
  setCommentId: (id: number) => void;
};
export type CommentsProps = {
  comments: Comment[];
  commentId: number;
  setComentsId: (id: number) => void;
};

export type PostActionsProps = {
  id: number;
  handleAction: (id: number) => void;
  loading: boolean;
};

export type PostForm = { title: string; body: string };

export type PostsFormProps = {
  postId: number;
  postForm: PostForm;
  loadEditing: boolean;
  loadDeleting: boolean;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleEditPost: (id: number) => void;
  handleDeletePost: (id: number) => void;
};
