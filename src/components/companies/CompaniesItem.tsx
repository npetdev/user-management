import { Row, Col, Typography } from "antd";

const { Text } = Typography;

const CompaniesItem: React.FC = () => {
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
      <Col span={4}>
        <Text strong>Name</Text>
      </Col>
      <Col span={4}>
        <Text strong>Country</Text>
      </Col>
      <Col span={4}>
        <Text strong>City</Text>
      </Col>
      <Col span={2}>
        <Text strong>No. Users</Text>
      </Col>
      <Col span={5}>
        <Text strong></Text>
      </Col>
    </Row>
  );
};

export default CompaniesItem;
