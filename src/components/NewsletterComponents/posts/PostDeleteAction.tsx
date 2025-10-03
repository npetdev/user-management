import { Button } from "antd";
import { PostActionsProps } from "../../../types/newsletterTypes/newsletterTypes";

const PostDeleteAction: React.FC<PostActionsProps> = ({
  id,
  handleAction,
  loading,
}) => {
  
  return (
    <Button
      type="primary"
      danger
      onClick={() => handleAction(id)}
      loading={loading}
    >
      {loading ? "Deleting..." : "Delete"}
    </Button>
  );
};

export default PostDeleteAction;
