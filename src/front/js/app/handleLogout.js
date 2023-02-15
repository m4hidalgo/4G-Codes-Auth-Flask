import React from "react";

export const handleLogout = () => {

    alert("Bye!!");

    localStorage.removeItem('jwt-token');

    location.replace('/login')
  
};