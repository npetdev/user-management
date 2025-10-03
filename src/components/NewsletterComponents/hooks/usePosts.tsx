// src/hooks/usePosts.ts
import { useState, useEffect } from "react";
import api from "../../../services/newsletterService/apiInstance";
import { Post, PostForm } from "../../../types/newsletterTypes/newsletterTypes";
export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postId, setPostId] = useState<number>(0);
  const [loadEditing, setLoadEditing] = useState<boolean>(false);
  const [loadDeleting, setLoadDeleting] = useState<boolean>(false);
  const [postForm, setPostForm] = useState<PostForm>({ title: "", body: "" });
  useEffect(() => {
    (async () => {
      try {
        const response = await api.get<Post[]>("/posts?_limit=1000");
        setPosts(response.data);
      } catch (e) {
        console.error(e);
      } finally {
      }
    })();
  }, []);
  const editPost = async () => {
    setLoadEditing(true);
    try {
      const response = await api.put(`/posts/${postId}`, {
        title: postForm.title,
        body: postForm.body,
      });
      if (response.status === 200) {
        const editedPost = posts.find((post) => post.id === postId);

        if (editedPost) {
          const editPost = posts.map((post) =>
            post.id === postId
              ? (post = { ...post, title: postForm.title, body: postForm.body })
              : post
          );
          setPosts(editPost);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadEditing(false);
      setPostId(0);
    }
  };
  const deletePost = async () => {
    setLoadDeleting(true);
    try {
      const response = await api.delete(`/posts/${postId}`);
      if (response.status === 200) {
        const newPosts = posts.filter((posts) => posts.id !== postId);
        setPosts(newPosts);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadDeleting(false);
      setPostId(0);
    }
  };
  const setPostData = (id: number) => {
    const findPosts = posts.find((post) => post.id === id);
    if (findPosts) {
      setPostForm(findPosts);
      setPostId(findPosts.id);
    }
  };
  return {
    setPostData,
    deletePost,
    posts,
    postId,
    setPostId,
    editPost,
    loadEditing,
    loadDeleting,
    postForm,
    setPostForm,
  };
};
