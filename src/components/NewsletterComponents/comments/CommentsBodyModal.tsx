import { CommentsProps } from "../../../types/newsletterTypes/newsletterTypes";
import { Modal, Typography } from "antd";
const { Paragraph } = Typography;

const CommentBodyModal: React.FC<CommentsProps> = ({
  comments,
  commentId,
  setComentsId,
}) => {
  const selectedComment = comments.find((comment) => comment.id === commentId);

  return (
    <Modal
      open={!!selectedComment}
      onCancel={() => setComentsId(0)}
      footer={null}
      title={`Comment ID: ${selectedComment?.id}`}
    >
      <Paragraph>{selectedComment?.body}</Paragraph>
    </Modal>
  );
};

export default CommentBodyModal;
