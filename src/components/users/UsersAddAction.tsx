import { useContext } from "react";
import { context } from "../../context/Context";
import { Button, Typography, Row, Col, Card } from "antd";
import { MyContextData } from "../../types/usersAndCompaniesTypes/types";

const { Title } = Typography;

const UsersAddAction: React.FC = () => {
  const contextData = useContext(context);
  const { setUser, companyForEdit, user, setIsUserFormModalOpen } =
    contextData as MyContextData;

  const addButton = () => {
    setIsUserFormModalOpen(true);

    // If user is added/edited from company, pre-fill the company name field on form
    if (companyForEdit.id) {
      setUser({ ...user, company: companyForEdit.name });
    }
  };

  return (
    <Card
      style={{
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Row justify="space-between" align="middle">
        <Col>
          <Title level={3} style={{ margin: 0 }}>
            Users
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

export default UsersAddAction;
