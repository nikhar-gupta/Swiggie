import { useEffect, useState } from "react";
import CardContainer from "../cardContainer/CardContainer";
import "./body.css";
import ShimmerHome from "../shimmerUI/ShimmerHome";
import { PROXY_URL, SWIGGY_HOME_URL } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addAllRestaurants } from "../../utils/store/restaurantsSlice";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const requestURL = PROXY_URL + encodeURIComponent(SWIGGY_HOME_URL);
  const dispatch = useDispatch();
  const restaurantStore = useSelector(
    (store) => store?.restaurants?.restaurantList
  );

  const handleFilterTopRestaurants = () => {
    const filteredRestaurant = restaurantList?.filter((res) => {
      return res?.info?.avgRating > 4.2;
    });
    setFilteredRestaurantList(filteredRestaurant);
  };
  useEffect(() => {
    fetchRestaurants();
  }, []);
  const fetchRestaurants = async () => {
    if (restaurantStore?.length === 0) {
      const response = await fetch(requestURL);
      const json = await response.json();
      const restaurantObject = json?.data?.cards.filter((card) => {
        return (
          card.card?.card?.gridElements?.infoWithStyle["@type"] ===
          "type.googleapis.com/swiggy.seo.widgets.v1.FoodRestaurantGridListingInfo"
        );
      });
      const restaurants =
        restaurantObject[0]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setRestaurantList(restaurants);
      setFilteredRestaurantList(restaurants);
      dispatch(addAllRestaurants(restaurants));
    } else {
      setRestaurantList(restaurantStore);
      setFilteredRestaurantList(restaurantStore);
    }
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
      {restaurantList?.length === 0 ? (
        <ShimmerHome />
      ) : (
        <CardContainer restaurantList={filteredRestaurantList} />
      )}
    </div>
  );
};

export default Body;
