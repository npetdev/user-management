import UsersItem from "./UserItem";
import { useState } from "react";





const UserList =()=>{

  const[users,setUsers] = useState('')

 
  
  
    return(
     <>
     <UsersItem/>
     
     </>
   )
    
}
  export default UserList;
  
  // load users list below user item