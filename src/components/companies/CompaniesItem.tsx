import { Row, Col, Typography } from "antd";

const { Text } = Typography;

const CompaniesItem: React.FC = () => {
  return (
    <Row
      className="item-row"
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
        <Text strong>Users</Text>
      </Col>
      <Col span={5}>
        <Text strong></Text>
      </Col>
    </Row>
  );
};

export default CompaniesItem;
