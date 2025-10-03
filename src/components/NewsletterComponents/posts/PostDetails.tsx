import { Typography, Divider } from "antd";

const { Title } = Typography;

const PostDetails: React.FC = () => {
  return (
    <>
      <Title level={3} style={{ textAlign: "center", marginTop: 20 }}>
        Post Details
      </Title>
      <Divider />
    </>
  );
};

export default PostDetails;

