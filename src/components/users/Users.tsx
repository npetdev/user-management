import { Modal, Empty } from "antd";
import { useContext, useEffect } from "react";
import { MyContextData } from "../../types/usersAndCompaniesTypes/types";
import { initUser } from "../../utils/initUser";
import { context } from "../../context/Context";
import UsersAddAction from "./UsersAddAction";
import UsersItemExe from "./UsersItem";
import UsersForm from "./UsersForm";
import UsersList from "./UsersList";

const Users: React.FC = () => {
  const contextData = useContext(context);
  const {
    users,
    setShowUsers,
    setUser,
    setUserForEdit,
    showUsers,
    setCompanies,
    isUserFormModalOpen,
    setIsUserFormModalOpen,
  } = contextData as MyContextData;

  // affect to company on every changes of users data (add,edit,delete)
  useEffect(() => {
    setCompanies((prevCompanies) =>
      prevCompanies.map((company) => ({
        ...company,
        usersOfCompany: users.filter((user) => user.companyId === company.id),
      }))
    );
  }, [users, setCompanies]);

  const handleCancel = () => {
    setIsUserFormModalOpen(false);
    setShowUsers(true);
    setUserForEdit(initUser);
    setUser(initUser);
  };

  return (
    <>
      <UsersAddAction />
      <UsersItemExe />
      <Modal
        width={400}
        footer={null}
        open={isUserFormModalOpen}
        onCancel={handleCancel}
      >
        <UsersForm />
      </Modal>
      {showUsers && (users.length === 0 ? <Empty /> : <UsersList />)}
    </>
  );
};
export default Users;
