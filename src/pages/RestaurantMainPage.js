import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./restaurantMainPage.css";
import ItemCategory from "../components/ItemCategory";
import ShimmerRestroPage from "../components/shimmerUI/ShimmerRestroPage";

const RestaurantMainPage = () => {
  const [restaurantDetails, setRestaurantDetails] = useState("");
  const { resId } = useParams();
  const star = new URL("../assets/pics/star.png", import.meta.url).href;

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);
  const fetchRestaurantDetails = async () => {
    const data = await fetch(
      //   `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.468338&lng=81.85460189999999&restaurantId=${resId}`
      // `https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.468338&lng=81.85460189999999&restaurantId=${resId}`,
      // {
      //   headers: {
      //     origin: "https://swiggie.netlify.app/",
      //     "x-requested-with": "XMLHttpRequest",
      //   },
      // }
      `https://cors-anywhere-ma1g.onrender.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.468338&lng=81.85460189999999&restaurantId=${resId}`
    );
    const json = await data.json();
    setRestaurantDetails(json);
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

  return Object.keys(restaurantDetails).length === 0 ? (
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
          itemCategory?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) {
          return (
            <ItemCategory
              key={itemCategory?.card?.card?.categoryId}
              itemCategory={itemCategory}
              index={index}
            />
          );
        }
      })}
    </div>
  );
};

export default RestaurantMainPage;
