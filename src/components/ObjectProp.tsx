import React from 'react'
type PersonProp = {
    name:{
        first:string,
        last:string
    }
}

const ObjectProp = (props: PersonProp) => {
  return (
    <div>
        <h2>Hey {props.name.first} {props.name.last} how are you</h2>
    </div>
  )
}

export default ObjectProp