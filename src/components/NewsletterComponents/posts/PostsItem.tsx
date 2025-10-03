import { Typography } from "antd";

const { Title } = Typography;

const PostsItem: React.FC = () => {
  return (
    <div style={{ textAlign: "center", margin: "24px 0" }}>
      <Title level={2} style={{ color: "#1890ff", fontWeight: "bold" }}>
        Newsletter
      </Title>
    </div>
  );
};

export default PostsItem;
