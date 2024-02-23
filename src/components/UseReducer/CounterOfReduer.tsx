import { Button } from '@mui/material'
import {useReducer} from 'react'

type CounterState ={
    count :number,
}
type updateAction ={
    type:  'increment' | 'decrement'
    payload:number
}
type ResetAction ={
    type :'reset'
}
type CounterAction =  updateAction | ResetAction

const initialState = {count :0}

function reducer(state :CounterState, action :CounterAction) {
    switch(action.type){
        case 'increment':
            return {count : state.count + action.payload}
        case 'decrement':
            return {count : state.count - action.payload}
        case 'reset':
            return initialState 
         default:
             return  state    
    }

}
const CounterOfReduer = () => {
    const [counter ,dispatch] = useReducer(reducer,initialState);

  return (
    <div>
        <h1> My Counter : {counter.count}</h1>
        <Button variant='outlined' onClick={() => dispatch({type: 'increment', payload: 15})}>Increment Counter </Button>
        <Button variant='outlined' onClick={() => dispatch({type: "decrement", payload: 15})}>Decrement Counter </Button>
        <Button variant='outlined' onClick={() => dispatch({type: "reset"})}>Reset Counter </Button>
    </div>
  )
}

export default CounterOfReduer