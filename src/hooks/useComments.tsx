import { useState, useEffect } from "react";
import api from "../services/newsletterService/apiInstance";
import { Comment } from "../types/newsletterTypes/newsletterTypes";
export const useComments = (postId: number) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentId, setCommentId] = useState<number>(0);
  useEffect(() => {
    (async () => {
      try {
        const response = await api.get<Comment[]>(`/comments`);
        const comments = response.data.filter(
          (i: Comment) => i.postId === postId
        );
        if (comments) {
          setComments(comments);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [postId]);
  const setComment = (id: number) => {
    const findComment = comments.find((comment) => comment.id === id);
    if (findComment) {
      setCommentId(findComment.id);
    }
  };
  return { comments, commentId, setComment, setCommentId };
};
