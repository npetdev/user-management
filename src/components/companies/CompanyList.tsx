import { useContext } from "react";
import { MyContextData } from "../../types/usersAndCompaniesTypes/types";
import { context } from "../../context/Context";
import { List, Row, Col } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const CompanyList: React.FC = () => {
  const contextData = useContext(context);
  const {
    setIsCompanyFormModalOpen,
    setCompany,
    companies,
    setCompanies,
    setCompanyForEdit,
    setShowCompanies,
    setShowUsers,
  } = contextData as MyContextData;

  const handleEdit = (id: string) => {
    const companyForEdit = companies.find((company) => company.id === id);
    if (companyForEdit) {
      setIsCompanyFormModalOpen(true);
      setCompanyForEdit(companyForEdit);
      setCompany(companyForEdit);
      setShowCompanies(false);
      setShowUsers(true);
    }
  };

  const handleDelete = (id: string) => {
    const updatedCompanies = companies.filter((i) => i.id !== id);
    setCompanies(updatedCompanies);
  };
  return (
    <List
      dataSource={companies}
      renderItem={(
        { name, country, city, usersOfCompany: usersComp, id },
        index
      ) => (
        <List.Item
          key={id}
          style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#f0f2f5" }}
        >
          <Row
            style={{
              width: "100%",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Col span={4}>{name}</Col>
            <Col span={4}>{country}</Col>
            <Col span={4}>{city}</Col>
            <Col span={2}>{usersComp.length}</Col>

            <Col span={5}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "16px",
                  fontSize: "18px",
                }}
              >
                <EditOutlined
                  onClick={() => handleEdit(id)}
                  style={{
                    color: "#1890ff",
                  }}
                />
                <DeleteOutlined
                  onClick={() => handleDelete(id)}
                  style={{
                    color: "#ff4d4f",
                  }}
                />
              </div>
            </Col>
          </Row>
        </List.Item>
      )}
    />
  );
};
export default CompanyList;
