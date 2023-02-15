import React, {useState} from "react"
import {handleSignUp} from "../app/handleSignUp.js"

export const Signup = () => {
    const [inputData, setinputData] = useState({
        email: '',
        pass: '',
    });

    const handleInputChange = (event) => {
        setinputData({
            ...inputData, 
            [event.target.name] : event.target.value
        })
    }

    return (
        <div>
            <h1>This is the SIGN UP form</h1>
            <form 
                name="myForm"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSignUp(inputData['email'], inputData['pass'])
                }}
            >
                    <li>Email: <input id="email" type="text" name="femail" onChange={handleInputChange} required/></li><br></br>
                    <li>Password: <input id="pass" type="text" name="fpass" onChange={handleInputChange} required/></li><br></br>
                    <input type="submit" value="Sign Up"/>
            </form>
        </div>
    )
}