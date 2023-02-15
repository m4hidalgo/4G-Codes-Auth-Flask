import React, {useState} from "react";
import { handleLogin } from "../app/handleLogin.js";

export const Login = () => {
    const [inputData, setinputData] = useState({
        email: '',
        pass: '',
    });

    const newUser = () => {
        location.replace('/signup')
    }

    const handleInputChange = (event) => {
        setinputData({
            ...inputData, 
            [event.target.name] : event.target.value
        })
    }


    return (
        <div>
            <h1>This is the LOGIN form</h1>
            <form 
                name="myForm"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin(inputData['email'], inputData['pass'])
                }}
                >
                    <li>Email: <input id="email" type="text" name="femail" onChange={handleInputChange} required/></li><br></br>
                    <li>Password: <input id="pass" type="text" name="fpass" onChange={handleInputChange} required/></li><br></br>
                    <input type="submit" value="Log In"/>
                    <input type="button" value="New User" onClick={newUser}/>
            </form>
        </div>
    )
}