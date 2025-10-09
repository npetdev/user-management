import { Card, Col, Row, Typography } from "antd";
import { PostsListProps } from "../../../types/newsletterTypes/newsletterTypes";

const { Paragraph } = Typography;

const PostsList: React.FC<PostsListProps> = ({ posts, setPost }) => {
  return (
    <Row gutter={[16, 16]} style={{ margin: "20px" }}>
      {posts.map((post) => (
        <Col xs={24} sm={12} md={8} lg={6} key={post.id}>
          <Card
            hoverable
            title={`Post #${post.id}`}
            onClick={() => setPost(post.id)}
            style={{ height: "100%" }}
          >
            <Paragraph strong>{post.title}</Paragraph>
            <Paragraph type="secondary" ellipsis={{ rows: 3 }}>
              {post.body}
            </Paragraph>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default PostsList;
