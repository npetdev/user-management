import { Typography } from "antd";
const { Title } = Typography;
const PostsItem: React.FC = () => {
  return (
    <Title
      level={2}
      style={{
        color: "#1890ff",
        textAlign: "center",
        margin: "1.875rem 0 2.625rem 0",
      }}
    >
      Newsletter
    </Title>
  );
};
export default PostsItem;
