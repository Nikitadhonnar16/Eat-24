import { CDN_URL } from "../utils/constants";
import { FcRating } from "react-icons/fc";

const RestaurantCard =(props) =>
{
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating }= resData?.info;
    const {deliveryTime}=resData?.info?.sla;
    return (

 
         <div className="res-card p-2 m-2 w-60">
          {/* <img className="res-logo rounded-xl h-44 w-64" alt="" src={
        //      CDN_URL + cloudinaryImageId }  />
        //      <div className="font-family: ProximaNova,arial,Helvetica Neue,sans-serif text-lg font-semibold text-slate-700">
        //         <h3>{name}</h3>
        //         <h4 className="flex"> <span className="m-1"><FcRating/></span> {avgRating}  Stars . {deliveryTime} Minutes</h4>
        //      </div>
        //         <h4>{cuisines.join(", ")} </h4>
                
           
            
        //  </div> */}

        
           <div className="p-4 transition-transform transform hover:scale-95 hover:shadow-lg hover:bg-gray-100 hover:border border-gray-200 rounded-xl">
              <img className="res-logo rounded-xl h-44 w-64" alt="" src={CDN_URL + cloudinaryImageId} />
           <div className="font-family: ProximaNova,arial,Helvetica Neue,sans-serif text-lg font-semibold text-slate-700">
               <h3>{name}</h3>
                <h4 className="flex">
                <span className="m-1">
                    <FcRating />
                 </span>
                  {avgRating} Stars . {deliveryTime} Minutes
                 </h4>
           </div>
                   <h4>{cuisines.join(", ")}</h4>
          </div>
    
    </div>

    )
}

export default RestaurantCard;