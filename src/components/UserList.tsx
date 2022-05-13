import UsersItem from "./UserItem";


type Props = {
  users: [],
  edit: (id: string) => void,
  handleDelete: (id: string) => void,
}

const UserList = ({ users, edit, handleDelete }: Props) => {

  return (
    <>
      <UsersItem />
      <br></br>

      {users.map((user: any) =>

        <div key={user.id} >

          {user.firstName} {user.lastName} {user.date} {user.options} {user.position}

          <button onClick={() => edit(user.id)}>EDIT</button>
          <button onClick={() => handleDelete(user.id)}>DELETE</button>

        </div>)}
    </>
  );
}

export default UserList;



