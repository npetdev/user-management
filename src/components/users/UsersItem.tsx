import { Row, Col, Typography } from "antd";

const { Text } = Typography;

const UsersItem: React.FC = () => {
  return (
    <Row
      style={{
        margin: "16px 0px 8px 0px",
        padding: "16px 0",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "#e6e6e6",
      }}
    >
      <Col span={5}>
        <Text strong>Full Name</Text>
      </Col>
      <Col span={5}>
        <Text strong>DOB</Text>
      </Col>
      <Col span={5}>
        <Text strong>Company</Text>
      </Col>
      <Col span={5}>
        <Text strong>Position</Text>
      </Col>
      <Col span={3}>
        <Text strong></Text>
      </Col>
    </Row>
  );
};

export default UsersItem;
