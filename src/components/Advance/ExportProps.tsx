import { GrretTypes } from "./PropsTobeExported"
const ExportProps = (props : GrretTypes) => {

  return (
    <div>
        <h1> i am {props.name} exported {props.age}  </h1>
    </div>
  )
}

export default ExportProps