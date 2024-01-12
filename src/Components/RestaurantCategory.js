import { useState } from "react";
import ItemList from "./ItemList";


RestarantCategory=({data})=>
// console.log(data);


{ 
        const [showItem, setShowItem]=useState(false);

        const handleClick=()=>
        {
                setShowItem(!showItem);
        }


    return (


   



            <div>

                    {/* Header */}


                    <div className="w-6/12 p-4 mx-auto my-4 shadow-lg text-lg first-line  text-slate-700 ">
                        <div className="flex justify-between font-bold cursor-pointer"  onClick={handleClick}>
                            <span className="text-xl">{data?.title} ({data.itemCards.length}) </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-7 text-gray-900">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                               </svg>
                              </span>
                         </div>         
                           { showItem && <ItemList items={data.itemCards} />}
                    </div>
                    
                   
                 

                    {/* Body */}
            </div>

    )

}

export default RestarantCategory;