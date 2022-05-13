
import { useState, useEffect } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";


const Users = () => {


  const [showForm, setShowForm] = useState(false);
  const [users, setUsers]: any = useState([]);
  const [userForEdit, setUserForEdit]: any = useState([]);

  useEffect(() => {
    const fromJSON: any = localStorage.getItem("user");
    const parsed = JSON.parse(fromJSON);
    if (fromJSON) {
      setUsers(parsed);
    }
  }, []);


  useEffect(() => {
    const toJSON = JSON.stringify(users);
    localStorage.setItem("user", toJSON);
  }, [userForEdit, users]);


  const onEdit = (id: string) => {
    const user = users.find((e: any) => e.id === id);
    setUserForEdit(user);
    setShowForm(true);
  }

  const handleDelete = (id: string) => {
    setUsers(users.filter((e: any) => e.id !== id));
  };


  const newUsers = (e: any) => {

    e.preventDefault();

    const editUser = users.find((i: any) => i.id === userForEdit.id);

    if (editUser) {

      userForEdit.firstName = e.target.firstName.value;
      userForEdit.lastName = e.target.lastName.value;
      userForEdit.options = e.target.options.value;
      userForEdit.date = e.target.date.value;
      userForEdit.position = e.target.position.value;
      userForEdit.phone = e.target.phone.value;

      setUserForEdit([userForEdit, editUser]);
      setShowForm(false);

    }

    else {
      const newUser = {

        id: Math.random().toString(36),
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        options: e.target.options.value,
        date: e.target.date.value,
        position: e.target.position.value,
        phone: e.target.phone.value,

      }
      setUsers([newUser, ...users]);
      setShowForm(false);

    };
  }


  return (
    <>

      <button onClick={() => {
        setUserForEdit({

          firstName: "",
          lastName: "",
          options: "",
          date: "",
          position: "",
          phone: ""
        })
        setShowForm(!showForm)
      }}>{showForm ? 'HIDE' : 'ADD'}</button>
      {showForm && <div>

        <UserForm

          addUser={newUsers}
          userForEdit={userForEdit}

        />  </div>}

      <UserList
        users={users}
        edit={onEdit}
        handleDelete={handleDelete} />

    </>
  )
}

export default Users;








