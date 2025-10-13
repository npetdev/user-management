import { useContext } from "react";
import uuid from "react-uuid";
import { MyContextData } from "../../types/usersAndCompaniesTypes/types";
import { initUser } from "../../utils/initUser";
import { context } from "../../context/Context";
import { Form, Button, Input, DatePicker, Select, Card } from "antd";
import dayjs, { Dayjs } from "dayjs";

const UsersForm: React.FC = () => {
  const contextData = useContext(context);
  const {
    user,
    users,
    setUserForEdit,
    setUsers,
    companies,
    setShowUsers,
    setUser,
    userForEdit,
    companyForEdit,
    setIsUserFormModalOpen,
  } = contextData as MyContextData;

  const handleDateChange = (date: Dayjs | null) => {
    setUser({ ...user, date });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleCompanyChange = (company: string) => {
    setUser({ ...user, company });
  };
  //disable future date in datepicker
  const disableFutureDate = (current: Dayjs) => {
    return current && current > dayjs().endOf("day");
  };

  const handleSubmit = () => {
    // Find companyId by company name from companies array
    const findCompanyId = companies.find(
      (company) => company.name === user.company
    );
    // If user edited - update user, else add new user
    if (userForEdit.id) {
      const updateUsers = users.map((users) =>
        users.id === userForEdit.id
          ? {
              ...user,
              companyId: findCompanyId ? findCompanyId.id : user.companyId,
            }
          : users
      );
      setUsers(updateUsers);
    } else {
      const newUser = {
        ...user,
        id: uuid(),
        companyId: findCompanyId ? findCompanyId.id : "",
      };
      setUsers([newUser, ...users]);
    }
    setUser(initUser);
    setUserForEdit(initUser);
    setIsUserFormModalOpen(false);
    setShowUsers(true);
  };
  return (
    <Card
      className="form-management-card"
    >
      <Form layout="vertical" onFinish={handleSubmit} size="small">
        <Form.Item label="First Name" required>
          <Input
            required
            placeholder="Enter First Name"
            onChange={handleInputChange}
            value={user.firstName}
            name="firstName"
          />
        </Form.Item>

        <Form.Item label="Last Name" required>
          <Input
            required
            placeholder="Enter Last Name"
            onChange={handleInputChange}
            value={user.lastName}
            name="lastName"
          />
        </Form.Item>

        <Form.Item label="Company" required>
          <Select
            placeholder="Select Company"
            value={user.company}
            disabled={!!companyForEdit.id}
            onChange={handleCompanyChange}
            options={companies.map((company) => ({
              value: company.name,
              label: company.name,
            }))}
          ></Select>
        </Form.Item>

        <Form.Item label="Date of Birth" required>
          <DatePicker
            required
            style={{ width: "100%" }}
            placeholder="Select Date"
            value={user.date}
            format="DD-MM-YYYY"
            onChange={handleDateChange}
            disabledDate={disableFutureDate}
          />
        </Form.Item>

        <Form.Item label="Position" required>
          <Input
            required
            placeholder="Enter Position"
            value={user.position}
            onChange={handleInputChange}
            name="position"
          />
        </Form.Item>

        <Form.Item label="Phone" required>
          <Input
            required
            placeholder="Enter Phone Number"
            type="text"
            name="phone"
            maxLength={9}
            value={user.phone}
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            {user.id ? "Update User" : "Add User"}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default UsersForm;
