import { MENU_API } from "../utils/constants"; // Make sure to have the correct import path
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true); // Manage loading state
  const [error, setError] = useState(null); // Manage error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${MENU_API}${resId}`);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setResInfo(json.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Loading is complete
      }
    };

    fetchData();
  }, [resId]);

  return { resInfo, loading, error }; // Return loading and error state
};

export default useRestaurantMenu;
