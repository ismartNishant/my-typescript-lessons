
type OptionalProps ={
    name : string,
    age ? : number,
    isloggedIn:boolean
}
const Optional = (props : OptionalProps) => {
    const {age = 25} = props;
  return (
    <div>
       <h1> hey {props.name} are you  {age} years old</h1>
    </div>
  )
}

export default Optional