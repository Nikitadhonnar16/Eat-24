import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestarantMenu";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, loading, error } = useRestaurantMenu(resId);

  console.log("###", resInfo); // Check the structure here

  const cardInfo = resInfo?.cards[2]?.card?.card?.info;

  console.log("cardInfo", cardInfo);

  // Loading state
  if (loading) return <Shimmer />;

  // Error state
  if (error) return <p>Something went wrong. Please try again later.</p>;

  // Check if resInfo exists
  if (!resInfo || !resInfo.cards || resInfo.cards.length === 0) {
    return <p>No data available.</p>;
  }

  // Extracting necessary information
  const {
    name,
    city,
    avgRating,
    costForTwoMessage,
    cuisines,
    cloudinaryImageId,
  } = cardInfo || {};

  return (
    <div className="font-family: ProximaNova,arial,Helvetica Neue,sans-serif bg-slate-100 min-h-screen flex items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        {/* Display CardInfo */}
        {cardInfo ? (
          <div className="card-info mb-8">
            <h1 className="font-bold pt-4 capitalize text-3xl text-slate-800">
              {name}
            </h1>
            <p className="font-medium my-2 text-base text-slate-600">
              {cuisines.length > 0
                ? cuisines.join(", ")
                : "No cuisines available"}{" "}
              - <span className="text-green-600">{costForTwoMessage}</span>
            </p>
            <div className="flex justify-center mb-4">
              {cloudinaryImageId && (
                <img
                  src={CDN_URL + cloudinaryImageId}
                  alt={name}
                  height={250}
                  width={300}
                  className="object-cover rounded-lg transition-transform duration-200 hover:scale-105"
                  onError={(e) => {
                    e.target.src = "path_to_placeholder_image"; // Placeholder image path
                  }}
                />
              )}
            </div>
            <p className="text-lg font-semibold text-slate-800">
              Avg Rating: {avgRating}
            </p>
            <p className="text-sm text-gray-500">Location: {city}</p>
            <div className="mt-6 mx-7">
              <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Add to Card
              </button>
            </div>
          </div>
        ) : (
          <p>No categories available.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
