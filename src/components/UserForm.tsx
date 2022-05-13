import { useEffect, useState } from "react";


type UserFormProps = {

    addUser: (e: React.FormEvent<EventTarget>) => void,
    userForEdit: any,
}


const UserForm = ({ addUser, userForEdit }: UserFormProps) => {

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [options, setOptions] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [position, setPosition] = useState<string>("");
    const [phone, setPhone] = useState<string>("");

    useEffect(() => {

        setFirstName(userForEdit.firstName);
        setLastName(userForEdit.lastName);
        setOptions(userForEdit.options);
        setDate(userForEdit.date);
        setPosition(userForEdit.position);
        setPhone(userForEdit.phone)

    }, [userForEdit])



    return (
        <div className="form">

            <h2>User Form</h2>

            <form onSubmit={addUser}
            >
                <label>First name:</label><br></br>
                <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    name="firstName" required /><br></br>

                <label>Last name:</label><br></br>
                <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    name="lastName" /><br></br>


                <label>Company:</label><br></br>
                <select
                    value={options}
                    onChange={(e) => setOptions(e.target.value)}
                    name="options" >
                    <option label=" "></option>
                    <option value="Siemens">Siemens</option>
                    <option value="CodetiQ"> CodetiQ</option>
                    <option value="BMW">BMW</option>
                    <option value="Fedex"> Fedex</option>
                    <option value="Atlas">Atlas</option>
                </select><br></br>

                <label htmlFor="birthdaytime">DOB:</label><br></br>
                <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    type="date" id="date" name="date" /><br></br>

                <label>Position:</label><br></br>
                <select
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    name="position" >
                    <option label=" "></option>
                    <option value="Production Supervisor">Production Supervisor</option>
                    <option value="Work Center Manager"> Work Center Manager</option>
                    <option value="Facilitator">Facilitator</option>
                    <option value="Manufacturing Manager"> Manufacturing Manager</option>
                    <option value="Security Assistant">Security Assistant</option>
                </select><br></br>

                <label>Phone number:</label><br></br>
                <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="phone" name="phone" /><br></br>

                <button type="submit"

                >{userForEdit.id ? "EDIT" : "SAVE"}</button>

            </form>

        </div>
    );
}


export default UserForm;