import { List, Row, Col } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { MyContextData } from "../../types/usersAndCompaniesTypes/types";
import { context } from "../../context/Context";
import dayjs from "dayjs";

const UsersList: React.FC = () => {
  const contextData = useContext(context);
  const {
    companyForEdit,
    users,
    setUsers,
    setShowUsers,
    setUser,
    setUserForEdit,
    setIsUserFormModalOpen,
  } = contextData as MyContextData;

  const handleEdit = (id: string) => {
    const userForEdit = users.find((user) => user.id === id);
    if (userForEdit) {
      const formattedUser = {
        ...userForEdit,
        date: dayjs(userForEdit.date),
      };
      setUserForEdit(formattedUser);
      setUser(formattedUser);
      setIsUserFormModalOpen(true);
      setShowUsers(false);
    }
  };
  const handleDelete = (id: string) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };
  // users of company, conditional render when edit company
  const usersCompany = users.filter(
    (user) => user.companyId === companyForEdit?.id
  );
  return (
    <List
      dataSource={companyForEdit.id ? usersCompany : users}
      renderItem={(
        { id, firstName, lastName, company, date, position },
        index
      ) => (
        <List.Item
          key={id}
          style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#f0f2f5" }}
        >
          <Row
            className="list-management-row"
          >
            <Col span={5}>{`${firstName} ${lastName}`}</Col>
            <Col span={5}>{dayjs(date).format("DD-MM-YYYY")}</Col>
            <Col span={5}>{company}</Col>
            <Col span={5}>{position}</Col>
            <Col span={3}>
              <div className="list-management-col">
                <EditOutlined
                  onClick={() => handleEdit(id)}
                  className="primary-color"
                />
                <DeleteOutlined
                  onClick={() => handleDelete(id)}
                  className="danger-color"
                />
              </div>
            </Col>
          </Row>
        </List.Item>
      )}
    />
  );
};

export default UsersList;
