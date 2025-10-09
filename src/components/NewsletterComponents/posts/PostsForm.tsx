import { Form, Input, Card, Space } from "antd";
import { PostsFormProps } from "../../../types/newsletterTypes/newsletterTypes";
import PostEditAction from "./PostEditAction";
import PostDeleteAction from "./PostDeleteAction";

const { TextArea } = Input;

const PostsForm: React.FC<PostsFormProps> = ({
  postForm,
  postId,
  loadEditing,
  loadDeleting,
  handleChange,
  handleEditPost,
  handleDeletePost,
}) => {
  return (
    <Card>
      <Form layout="vertical" onFinish={handleEditPost}>
        <Form.Item label="Title">
          <TextArea
            name="title"
            value={postForm.title}
            onChange={handleChange}
            autoSize={{ minRows: 2, maxRows: 5 }}
          />
        </Form.Item>
        <Form.Item label="Body">
          <TextArea
            name="body"
            value={postForm.body}
            onChange={handleChange}
            autoSize={{ minRows: 4, maxRows: 10 }}
          />
        </Form.Item>
        <Space>
          <PostEditAction
            id={postId}
            handleAction={handleEditPost}
            loading={loadEditing}
          />
          <PostDeleteAction
            id={postId}
            handleAction={handleDeletePost}
            loading={loadDeleting}
          />
        </Space>
      </Form>
    </Card>
  );
};

export default PostsForm;
