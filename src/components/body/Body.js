import { useEffect, useState } from "react";
import CardContainer from "../cardContainer/CardContainer";
import "./body.css";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleFilterTopRestaurants = () => {
    const filteredRestaurant = restaurantList?.filter((res) => {
      return res?.info?.avgRating > 4;
    });
    setFilteredRestaurantList(filteredRestaurant);
  };
  useEffect(() => {
    fetchRestaurants();
  }, []);
  const fetchRestaurants = async () => {
    const response = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.468338&lng=81.85460189999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.468338&lng=81.85460189999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(restaurants);
    setFilteredRestaurantList(restaurants);
    console.log(json);
  };

  return (
    <div className="bodyMain">
      <div className="topBar">
        <div className="searchBar">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const result = restaurantList?.filter((rest) => {
                return rest?.info?.name
                  ?.toLowerCase()
                  .includes(searchText?.toLowerCase());
              });
              setFilteredRestaurantList(result);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filterRestaurantBtn"
          onClick={handleFilterTopRestaurants}
        >
          Top-rated Restaurants
        </button>
      </div>
      <CardContainer restaurantList={filteredRestaurantList} />
    </div>
  );
};

export default Body;
