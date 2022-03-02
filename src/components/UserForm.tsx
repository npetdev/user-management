import { useState,useEffect} from "react";


const UserForm  = () => {

  
    const [users, setUsers]:any = useState([]);
   

    useEffect(() => {
      const json:any = localStorage.getItem("user");
       if (json) {
        setUsers(JSON.parse(json));
      }
    },[]);
      
    useEffect(() => {
        const json:any = JSON.stringify(users);
        localStorage.setItem("user", json);
      }, [users]);

   


    const addUser = (e:any) => {
       e.preventDefault();
        const newUser = {
          id: Math.random().toString(36),
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
          options: e.target.options.value,
          date: e.target.date.value,
          position: e.target.position.value,
          phone: e.target.phone.value,
        };
        setUsers([...users, newUser]);
        e.target.firstName.value = "";
        e.target.lastName.value = "";
        e.target.options.value = "";
        e.target.date.value = "";
        e.target.position.value = "";
        e.target.phone.value="";
      };
   
      
      
      return (
        <div className = "form">
             
          <h2>User Form</h2>
           
            <form onSubmit={addUser}>
               <label>First name:</label><br></br>
               <input type="text" name="firstName" required/><br></br>
              
               <label>Last name:</label><br></br>
               <input type ="text" name="lastName" required/><br></br>

              

               <label>Company:</label><br></br>
               <select
                name = "options" required>
                   <option label=" "></option>
                   <option value="Siemens">Siemens</option>
                   <option value="CodetiQ"> CodetiQ</option>
                   <option value="BMW">BMW</option>
                   <option value="Audi"> Fedex</option>
                   <option value="Fiat">Atlas</option>
               </select><br></br>

               <label htmlFor="birthdaytime">DOB:</label><br></br>
               <input type="date" id="date" name="date" required/><br></br>

               <label>Position:</label><br></br>
               <select   name = "position"required>
                   <option label=" "></option>
                   <option value ="Production Supervisor">Production Supervisor</option>
                   <option value="Work Center Manager"> Work Center Manager</option>
                   <option value="Facilitator">Facilitator</option>
                   <option value="Manufacturing Manager"> Manufacturing Manager</option>
                   <option value="Security Assistant">Security Assistant</option>
               </select><br></br>

               <label>Phone number:</label><br></br>
               <input type="phone" name="phone" required/><br></br>
               
            <input type="submit"/>

        </form>
            
        </div>
    
       
    );}


export default UserForm;