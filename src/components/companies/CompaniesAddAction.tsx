import { Button, Typography, Card, Row, Col } from "antd";
import { useContext } from "react";
import { MyContextData } from "../../types/usersAndCompaniesTypes/types";
import { context } from "../../context/Context";

const { Title } = Typography;

const CompaniesAddAction: React.FC = () => {
  const contextData: MyContextData | null = useContext(context);
  const { setIsCompanyFormModalOpen } = contextData as MyContextData;

  const addButton = () => {
    setIsCompanyFormModalOpen(true);
  };

  return (
    <Card style={{ borderRadius: 8 }}>
      <Row justify="space-between" align="middle">
        <Col>
          <Title level={3} style={{ margin: 0 }}>
            Companies
          </Title>
        </Col>
        <Col>
          <Button onClick={addButton} type="primary">
            ADD
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default CompaniesAddAction;
