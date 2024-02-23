import React from 'react'
import {Namess} from './PropsTobeExported'
type listofPerson = {
    names: Namess[]
}
const SharingArrayProps = (props: listofPerson) => {
    return (
        <div>
            {
                props.names.map(name => {
                    return (
                        <ul key={name.first}> 
                          <li > <h1 >{name.first} {name.last} </h1> </li> 
                        </ul>
                       )
                })
            }
        </div>
    )
}

export default SharingArrayProps;