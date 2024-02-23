import React, { useState } from 'react'
import { Button } from '@mui/material';

type AuthUser ={
    name:string,
    email:string
}

const User = () => {
        const [user,setUser] = useState<AuthUser | null>(null);

        const [isloggedIn, setIsloggedIn] = useState(false);
        const handleLogIn = () => {
            setIsloggedIn(true);
            setUser({
                name:"Nishant",
                email :"nishantrajputa11@gmail.com"
            })
        }
        const handleLogOut = () => {
            setIsloggedIn(false);
            setUser(null)
        }
        return (
            <div>
                <Button variant='outlined' color="success" onClick={handleLogIn}>LogIn</Button>
                <Button variant='outlined' color="error" onClick={handleLogOut}>LogOut</Button>
                <p>{user?.name} and {user?.email}</p>
                <h1>user is {isloggedIn ? "logged in successfully" :"logged out successfully"}</h1>
            </div>
        )
}

export default User