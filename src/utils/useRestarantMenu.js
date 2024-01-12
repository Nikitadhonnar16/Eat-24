import { MENU_API } from "./constants";
import { MENU_API } from "../utils/constants";
import { useState,useEffect } from "react";

const useRestarantMenu = (resId)=>
{
const [resInfo,setResInfo]=useState(null);


    //fetchdata 

     useEffect(()=> {
        fetchData();
    },[]);

    const fetchData = async()=> {
       const data= await fetch(MENU_API+resId);
       const json = await data.json();
      
    setResInfo(json.data);
    };


    return resInfo;
};


export default useRestarantMenu
