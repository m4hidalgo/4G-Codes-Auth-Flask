import React from "react";
import { handleLogin } from "../app/handleLogin.js";

export const Login = () => {
    const input_email = document.getElementById('email');
    const input_pass = document.getElementById('pass');

    const newUser = () => {
        location.replace('https://3000-4geeksacade-reactflaskh-iny5xmevfgu.ws-eu77.gitpod.io/signup')
    }

    return (
        <div>
            <h1>This is the LOGIN form</h1>
            <form 
                name="myForm"
                //action="/private" 
                onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin(input_email.value, input_pass.value)
                }}
                //method="post"
                >
                    <li>Email: <input id="email" type="text" name="femail" required/></li><br></br>
                    <li>Password: <input id="pass" type="text" name="fpass" required/></li><br></br>
                    <input type="submit" value="Log In"/>
                    <input type="button" value="New User" onClick={newUser}/>
            </form>
        </div>
    )
}