import React, { useEffect } from "react";
import { handleLogout } from "../app/handleLogout.js";

export const Private = () => {

    useEffect(() => {
        const token = localStorage.getItem('jwt-token');

        if (!token) {
            alert("You don't have permission to view this page");
            location.replace('https://3000-4geeksacade-reactflaskh-iny5xmevfgu.ws-eu77.gitpod.io/login')
        }
    }, [])
    
    return (
        <div>
            <h1>This is the PRIVATE page. Hello fellow user!!</h1>

            <button 
                type="button" 
                className="btn btn-danger"
                onClick={handleLogout}>
                    Logout
            </button>
            
        </div>
    )
}