import React from "react";

export const handleLogout = () => {

    alert("Bye!!");

    localStorage.removeItem('jwt-token');

    location.replace('https://3000-4geeksacade-reactflaskh-iny5xmevfgu.ws-eu77.gitpod.io/login')
  
};