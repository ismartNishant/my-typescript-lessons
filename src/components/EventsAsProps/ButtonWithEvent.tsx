
import { Button } from '@mui/material'
import React from 'react'
type ButtonProp ={
    handleClick : (event : React.MouseEvent<HTMLButtonElement>) => void
}
const ButtonWithEvent = (props : ButtonProp) => {
  return (
    <div>
            <Button onClick={(event)=> props.handleClick(event)} variant='contained' color='success' size='large'>Click On Me with event </Button>
    </div>
  )
}

export default ButtonWithEvent