import { Button } from "antd";
import { PostActionsProps } from "../../../types/newsletterTypes/newsletterTypes";

const PostEditAction: React.FC<PostActionsProps> = ({ id, handleAction, loading}) => {
  return (
    <Button type="primary" onClick={() => handleAction(id)} loading={loading}>
      {loading ? "Editing..." : "Edit"}
    </Button>
  );
};

export default PostEditAction;