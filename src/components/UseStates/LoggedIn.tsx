import { Button } from '@mui/material';
import { useState } from 'react'

const LoggedIn = () => {
    const [isloggedIn, setIsloggedIn] = useState(false);
    const handleLogIn = () => {
        setIsloggedIn(true)
    }
    const handleLogOut = () => {
        setIsloggedIn(false)
    }
    return (
        <div>
            <Button variant='outlined' color="success" onClick={handleLogIn}>LogIn</Button>
            <Button variant='outlined' color="error" onClick={handleLogOut}>LogOut</Button>
            <h1>user is {isloggedIn ? "logged in successfully" :"logged out successfully"}</h1>
        </div>
    )
}

export default LoggedIn