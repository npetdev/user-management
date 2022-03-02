import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";


const Users =()=> {
  
 const [showUserForm,setShowUserForm] = useState(false);
  

  
 
 return(
     <>
    
    <div>
      <button onClick={() => setShowUserForm(!showUserForm)}>{showUserForm ? 'ADD' : 'ADD'}</button>
      {showUserForm && <div>  <UserForm/>  </div>}

    </div>
     
      <UserList/>
     
     </>

   )
    // Add  -  Hide form on submit
}
  export default Users;
  