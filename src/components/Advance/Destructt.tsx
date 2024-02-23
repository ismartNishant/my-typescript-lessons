

type GrretTypes = {
    name : string,
    age :number,
    isloggedIn: boolean
 }
 const Destructt = ({name,age,isloggedIn}:GrretTypes) => {
   return (
     <div>
         <h1>
             {isloggedIn ? `  Hey  ${name} how are you  are you ${age} years old`:"Welcome Guest" }
            </h1>
     </div>
   )
 }
 
 export default Destructt