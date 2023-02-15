export const handleSignUp = async (email, pass) => {
  console.log("E-mail: "+email, "Password: "+pass);
  const response = await fetch(
    process.env.BACKEND_URL+"/signup",
    {
      method: "POST",
      mode: 'cors',
      credentials: 'omit',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({'email': email, 'password': pass}),
    }
  )

  if (!response.ok){
    console.log(process.env)
    console.log(response.body)
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
    
  }

  else {
    alert("Welcome, new user!!")
    location.replace('/login')
  }
  
};
