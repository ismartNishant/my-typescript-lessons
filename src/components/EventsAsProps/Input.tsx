import { TextField } from '@mui/material'
import React from 'react'
type InputProps ={
    value : string,
    handleChange : (event : React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props : InputProps) => {
  return (
    <div>
        <TextField type='text' variant='outlined' placeholder='Username'value={props.value} onChange={props.handleChange}></TextField>
    </div>
  )
}

export default Input