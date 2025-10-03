import { Typography } from "antd";
const { Title } = Typography;

const CommentsItem: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
      <Title level={3}>Comments</Title>
    </div>
  );
};

export default CommentsItem;
