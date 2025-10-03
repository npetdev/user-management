import { Modal, Empty } from "antd";
import { useContext } from "react";
import { initCompany } from "../../utils/initCompany";
import { MyContextData } from "../../types/usersAndCompaniesTypes/types";
import { context } from "../../context/Context";
import CompanyList from "./CompanyList";
import CompanyForm from "./CompanyForm";
import Users from "../users/Users";
import CompaniesAddAction from "./CompaniesAddAction";
import CompaniesItem from "./CompaniesItem";
const Companies: React.FC = () => {
  const contextData = useContext(context);
  const {
    companies,
    companyForEdit,
    setCompany,
    setCompanyForEdit,
    setShowCompanies,
    isCompanyFormModalOpen,
    setIsCompanyFormModalOpen,
  } = contextData as MyContextData;

  const handleCancel = () => {
    setIsCompanyFormModalOpen(false);
    setShowCompanies(true);
    setCompanyForEdit(initCompany);
    setCompany(initCompany);
  };
  return (
    <>
      <CompaniesAddAction />
      <CompaniesItem />
      <Modal
        open={isCompanyFormModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <CompanyForm />
        {companyForEdit.id && isCompanyFormModalOpen && <Users />}
      </Modal>
      {companies.length === 0 ? <Empty /> : <CompanyList />}
    </>
  );
};
export default Companies;
