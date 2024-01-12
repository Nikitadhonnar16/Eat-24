import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestarantMenu from "../utils/useRestarantMenu";
import RestarantCategory from "./RestaurantCategory";


const RestarantMenu=()=>
{

  const {resId}=useParams();
  const resInfo=useRestarantMenu(resId);

 



         if(resInfo===null) return <Shimmer/>;

          const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
          const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
          // console.log(itemCards);

      // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);


      const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
      
          c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )

      console.log(categories);
        
          return(
  
            <div className="font-family: ProximaNova,arial,Helvetica Neue,sans-serif bg-slate-50">

                  <div className="Menu  text-center ">
                     <h1 className="font-bold  pt-11 capitalize text-2xl text-slate-800 ">{name}</h1>

                         <p className="font-bol m-1 text-base text-slate-800">
                     {cuisines.join(", ")} - {costForTwoMessage}
                         </p>
                   

               

                    {/* <ul >
                         {itemCards && itemCards.map((item)=>
                         <li key={item.card.info.id}>{item.card.info.name}  -  {"Rs."} {item.card.info.price/100} </li>)}
                        
                    </ul> */}


                       {/* categories  Accordian */}

                      {categories.map((category)=> <RestarantCategory key={category?.card?.card?.title} data={category?.card?.card}/> 
                      )}

              </div>

     </div>
    )
}

export default RestarantMenu;