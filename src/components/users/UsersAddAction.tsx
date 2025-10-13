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

    // If user is add/edit from company, pre-fill the company name field on user form
    if (companyForEdit.id) {
      setUser({ ...user, company: companyForEdit.name });
    }
  };

  return (
    <Card className="add-action-card">
      <Row className="add-action-row" >
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
