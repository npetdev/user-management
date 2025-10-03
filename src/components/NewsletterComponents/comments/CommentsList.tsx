import { CommentsListProps } from "../../../types/newsletterTypes/newsletterTypes";
import { Card, List, Typography } from "antd";
const { Meta } = Card;
const { Text } = Typography;


const CommentsList: React.FC<CommentsListProps> = ({ comments, setCommentId } ) => {
  return (
    <List
      grid={{ gutter: 16, column: 1 }}
      dataSource={comments}
      renderItem={(comment) => (
        <List.Item>
          <Card
            title={<Text strong>{comment.name}</Text>}
            extra={<Text type="secondary">ID: {comment.id}</Text>}
            hoverable
            onClick={() => setCommentId(comment.id)}
            style={{ borderRadius: "12px" }}
          >
            <Meta description={comment.body.slice(0, 100) + "..."} />
          </Card>
        </List.Item>
      )}
    />
  );
};

export default CommentsList;
