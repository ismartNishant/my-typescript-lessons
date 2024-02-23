// import React ,{useEffect, useState} from 'react'/
type GrretTypes = {
   name : string,
   age :number,
   isloggedIn: boolean
}
const Greet = (props:GrretTypes) => {
  return (
    <div>
        <h1>
            { props.isloggedIn ? `  Hey  ${props.name} how are you  are you ${props.age} years old`:"Welcome Guest" }
           </h1>
    </div>
  )
}

export default Greet