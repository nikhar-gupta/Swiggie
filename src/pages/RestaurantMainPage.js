import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./restaurantMainPage.css";
import ItemCategory from "../components/ItemCategory";
import ShimmerRestroPage from "../components/shimmerUI/ShimmerRestroPage";
import { PROXY_URL, SWIGGY_RESTRO_URL } from "../utils/constants";

const RestaurantMainPage = () => {
  const [restaurantDetails, setRestaurantDetails] = useState("");
  const { resId } = useParams();
  const star = new URL("../assets/pics/star.png", import.meta.url).href;
  const requestURL = PROXY_URL + encodeURIComponent(SWIGGY_RESTRO_URL) + resId;

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);
  const fetchRestaurantDetails = async () => {
    const data = await fetch(requestURL);
    const json = await data.json();
    setRestaurantDetails(json);
    console.log(json);
  };
  const info = restaurantDetails?.data?.cards[2]?.card?.card?.info || {};
  console.log(restaurantDetails);
  const itemCategories =
    restaurantDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;
  console.log(itemCategories);

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    locality,
    sla,
  } = info;

  return Object.keys(restaurantDetails)?.length === 0 ? (
    <ShimmerRestroPage />
  ) : (
    <div className="restaurantMainPage">
      <div className="restraurantDetails">
        <h1 className="name">{name}</h1>
        <div className="miscDetails">
          <p className="ratings">
            <img src={star} width="20px" />
            {avgRating}{" "}
            <span className="rating">{"(" + totalRatingsString + ")"}</span>
            <span className="costForTwo">{costForTwoMessage}</span>
          </p>
          <p className="cuisines">{cuisines?.join(", ")}</p>
          <p className="locality">
            <a className="bold">Outlet - </a>
            {locality}
          </p>
          <p className="time">
            <a className="bold">{sla?.slaString?.toLowerCase()}</a>
          </p>
        </div>
      </div>
      {itemCategories?.map((itemCategory, index) => {
        if (
          itemCategory?.card?.card["@type"].includes(
            "type.googleapis.com/swiggy.presentation.food.v2."
          ) &&
          itemCategory?.card?.card?.itemCards?.length
        ) {
          return (
            <ItemCategory
              key={itemCategory?.card?.card?.categoryId}
              itemCategory={itemCategory}
            />
          );
        }
      })}
    </div>
  );
};

export default RestaurantMainPage;
