import { Form, Button, Input, Card } from "antd";
import { MyContextData } from "../../types/usersAndCompaniesTypes/types";
import { initCompany } from "../../utils/initCompany";
import uuid from "react-uuid";
import { context } from "../../context/Context";
import { useContext } from "react";

const CompanyForm: React.FC = () => {
  const contextData: MyContextData | null = useContext(context);

  const {
    setIsCompanyFormModalOpen,
    setCompany,
    company,
    companies,
    setCompanies,
    companyForEdit,
    setCompanyForEdit,
    setShowCompanies,
  } = contextData as MyContextData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (companyForEdit.id) {
      const updatedCompanies = companies.map((comp) =>
        comp.id === companyForEdit.id
          ? {
              ...company,
              name: company.name,
              city: company.city,
              country: company.country,
            }
          : comp
      );
      setCompanies(updatedCompanies);
      setCompanyForEdit(initCompany);
    } else {
      const newCompany = {
        ...company,
        id: uuid(),
      };
      setCompanies((prev) => [newCompany, ...prev]);
    }
    setShowCompanies(true);
    setIsCompanyFormModalOpen(false);
    setCompany(initCompany);
  };

  return (
    <Card
      title={company.id ? "Edit Company" : "New Company"}
      style={{ maxWidth: 400, margin: "0 auto" }}
    >
      <Form layout="vertical" onFinish={handleSubmit} size="small">
        <Form.Item label="Name" required>
          <Input
            required
            placeholder="Company Name"
            value={company.name}
            name="name"
            id="name"
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item label="Country" required>
          <Input
            required
            placeholder="Country"
            value={company.country}
            name="country"
            id="country"
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item label="City" required>
          <Input
            required
            placeholder="City"
            value={company.city}
            name="city"
            id="city"
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            {company.id ? "Update" : "Add"}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CompanyForm;
