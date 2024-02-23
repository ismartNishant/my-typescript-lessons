import { Button } from '@mui/material'

type ButtonProp ={
    handleClick : () => void
}

const PropButton = (props :ButtonProp) => {
  return (
    <div style={{padding:"2rem"}}>
        <Button onClick={props.handleClick} variant='contained' color='success' size='large'>Click On Me </Button>
    </div>
  )
}

export default PropButton