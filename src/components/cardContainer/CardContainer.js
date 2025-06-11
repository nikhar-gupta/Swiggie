import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import "./cardContainer.css";

const CardContainer = ({ restaurantList }) => {
  return (
    <div className="cardContainer">
      {restaurantList?.map((rest) => {
        return (
          <Link
            to={"/restaurant/" + rest?.info?.id}
            key={rest?.info?.id}
            className="restroCardLinks"
          >
            <RestaurantCard
              name={rest?.info?.name}
              rating={rest?.info?.avgRating}
              time={rest?.info?.sla?.deliveryTime}
              image={rest?.info?.cloudinaryImageId}
              cuisines={rest?.info?.cuisines}
              locality={rest?.info?.locality}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default CardContainer;
