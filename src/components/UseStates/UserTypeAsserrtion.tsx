import React, { useState } from 'react'
import { Button } from '@mui/material';

type AuthUser ={
    name:string,
    email:string
}

const UserTypeAssertion = () => {

        const [user,setUser] = useState<AuthUser>({} as AuthUser);

        const handleLogIn = () => {
            setUser({
                name:"Nishant",
                email :"nishantrajputa11@gmail.com"
            })
        }
   
        return (
            <div>
                <Button variant='outlined' color="success" onClick={handleLogIn}>LogIn</Button>
                <p>{user.name} and {user.email}</p>
                <h1>user is logged in successfully</h1>
            </div>
        )
}

export default UserTypeAssertion