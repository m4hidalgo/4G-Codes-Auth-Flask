import React from "react";


export const handleLogin = async (email, pass) => {
  
  const resp = await fetch(
    process.env.BACKEND_URL+"/login",
    {
      method: "POST",
      mode: 'cors',
      credentials: 'omit',
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify({'email': email, 'password': pass}),
    }
  )

  if (!resp.ok){
    console.log(resp.body)
    const message = `An error has occured: ${resp.status}`;
    throw new Error(message);
    
  }

  const data = await resp.json()

  alert("Welcome back, "+email+"!!")
  
  localStorage.setItem("jwt-token", data.token);

  location.replace('/private')

  return data
  
};