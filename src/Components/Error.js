import {useRouteError } from "react-router-dom";
const Error = () =>
{
 
    const errr= useRouteError();
    console.log(errr);   // printing error object on console  

    return(
             <div>
                    <h1>Opps!!!</h1>
                    <h2>Something Went Wrong!!</h2>
                    <h3>{errr.status} : {errr.statusText} </h3>
             </div>
    )
}

export default Error;