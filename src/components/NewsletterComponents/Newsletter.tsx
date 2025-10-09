import { Spin, Layout } from "antd";
import PostsItem from "./posts/PostsItem";
import PostsForm from "./posts/PostsForm";
import PostsList from "./posts/PostsList";
import PostDetails from "./posts/PostDetails";
import CommentBodyModal from "./comments/CommentsBodyModal";
import CommentsItem from "./comments/CommentsItem";
import CommentsList from "./comments/CommentsList";
import { usePosts } from "./hooks/usePosts";
import { useComments } from "./hooks/useComments";
const { Content } = Layout;
const Newsletter: React.FC = () => {
  const {
    deletePost,
    editPost,
    posts,
    postId,
    postForm,
    loadEditing,
    loadDeleting,
    setPostForm,
    setPostData,
  } = usePosts();
  const { comments, commentId, setComment, setCommentId } = useComments(postId);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostForm({ ...postForm, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <Content>
        {!postId && (
          <>
            <PostsItem />
            {posts.length ? (
              <PostsList posts={posts} setPost={setPostData} />
            ) : (
              <Spin size="large" fullscreen />
            )}
          </>
        )}

        {postId !== 0 && !commentId && (
          <>
            <PostDetails />
            <PostsForm
              postForm={postForm}
              postId={postId}
              loadEditing={loadEditing}
              loadDeleting={loadDeleting}
              handleChange={handleChange}
              handleEditPost={editPost}
              handleDeletePost={deletePost}
            />
            <CommentsItem />
            <CommentsList setCommentId={setComment} comments={comments} />
          </>
        )}
        {commentId !== 0 && (
          <CommentBodyModal
            commentId={commentId}
            comments={comments}
            setComentsId={setCommentId}
          />
        )}
      </Content>
    </Layout>
  );
};

export default Newsletter;
