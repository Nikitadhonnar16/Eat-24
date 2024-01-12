import { CDN_URL } from "../utils/constants";

const ItemList =({ items })=>

{
    // console.log(items);

    return(
            <div>
            
            {
                items.map((item=>
                (
                    <div key={item.card.info.id} className="p-2 m-2 border-[#d3d3d3]  border-b text-left flex justify-between">
                              
                         <div>    {/* w-9/12 */}
                             <div className="py-2">    
                                     <div className="font-semibold my-1">{item.card.info.name}</div>
                                     <div> ₹ {item.card.info.price ? item.card.info.price/100 :item.card.info.defaultPrice/100 } </div>
                             </div>
                             {/* <div>{item.card.info.description}</div> */}
                        </div> 

                        <div className="">
                           
                            <img src={CDN_URL + item.card.info.imageId} className="w-32" />  {/* w-3/12    */}
                            <button className=" px-4 ml-6 bg-white shadow-lg m-auto text-center rounded-md text-green-700 font-semibold"  >Add +</button>
                          </div>  
                    </div>    
                )))} 

              


            </div>
    );
};
export default ItemList;