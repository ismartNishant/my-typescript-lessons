import React from 'react'
type listofPerson = {
    names: {
        first: string,
        last: string ,
    }[]
}
const ArrayOfobjectProp = (props: listofPerson) => {
    return (
        <div>
            {
                props.names.map(name => {
                    return (
                        <ul key={name.first}> 
                          <li> <h1>{name.first} {name.last} </h1> </li> 
                        </ul>
                       )
                })
            }
        </div>
    )
}

export default ArrayOfobjectProp