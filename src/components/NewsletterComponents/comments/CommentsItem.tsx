import { Typography } from "antd";
const { Title } = Typography;

const CommentsItem: React.FC = () => {
  return (
    <Title level={3} style={{ textAlign: "center" }}>
      Comments
    </Title>
  );
};

export default CommentsItem;
