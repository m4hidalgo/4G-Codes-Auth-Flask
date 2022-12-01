import React from "react"
import {handleSignUp} from "../app/handleSignUp.js"

export const Signup = () => {
    const input_email = document.getElementById('email');
    const input_pass = document.getElementById('pass');
    return (
        <div>
            <h1>This is the SIGN UP form</h1>
            <form 
                name="myForm"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSignUp(input_email.value, input_pass.value)
                }}
            >
                    <li>Email: <input id="email" type="text" name="femail" required/></li><br></br>
                    <li>Password: <input id="pass" type="text" name="fpass" required/></li><br></br>
                    <input type="submit" value="Sign Up"/>
            </form>
        </div>
    )
}