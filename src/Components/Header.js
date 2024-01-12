import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header =() =>
{

    const [btnName, setbtnName]=useState("Login ")

    const onlineStatus= useOnlineStatus();


    return (

    <div className="header flex justify-between mx-40">
        <div className="logo-container">
              
            <img className="logo w-[80px] mx-2 items-center" 
            src={LOGO_URL} alt="" />
        </div>

        <div className=" header flex items-center ">
            <ul className=" nav-items flex font-family: ProximaNova,arial,Helvetica Neue,sans-serif text-lg font-semibold ">

                <li className="px-6">
                    Online Status : {onlineStatus?"🟢":"🔴"} 
                </li>

                <li className="px-6">
                    <Link to="/">Home</Link> 
                </li>
                <li className="px-6">
                   <Link to="/about">About Us</Link>
                </li>
                <li className="px-6">
                   <Link to="/contact">Contact Us</Link> 
                </li>
                <li className="px-6">
                   <Link to="/grocery">Grocery</Link> 
                </li>
                <li className="px-6">Cart</li>
                <button className="login ml-6" onClick={()=>
                {
                    btnName==="Login"?
                    setbtnName("Logout"):
                    setbtnName("Login");

                    console.log(btnName);
                }}>{btnName}
               
                </button>
             

            </ul>

        </div>  

     </div>    
    )
}

export default Header;