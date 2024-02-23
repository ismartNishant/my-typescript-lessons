import React from 'react'
type StatusProp = {
    status: "loading" | "success" | "error"
}

const Status = (props: StatusProp) => {
    let message = "";
    if (props.status === "loading") {
        message = "Loading is passed"
    }
    else if (props.status === "success") {
        message = "Props has passed"
    }
    else if (props.status === "error") {
        message = "something wrong"
    }
    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}

export default Status