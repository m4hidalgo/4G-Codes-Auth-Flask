import React from "react";

export const handleSignUp = async (email, pass) => {
  console.log("E-mail: "+email, "Password: "+pass);
  const response = await fetch(
    "https://3001-4geeksacade-reactflaskh-iny5xmevfgu.ws-eu77.gitpod.io/signup",
    {
      method: "POST",
      mode: 'cors',
      credentials: 'omit',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({'email': email, 'password': pass}),
    }
  )

  if (!response.ok){
    console.log(response.body)
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
    
  }

  else {
    alert("Welcome, new user!!")
    location.replace('https://3000-4geeksacade-reactflaskh-iny5xmevfgu.ws-eu77.gitpod.io/login')
  }
  
};
