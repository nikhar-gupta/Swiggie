const RestaurantCard = ({ name, rating, time, image, cuisines, locality }) => {
  const star = new URL("../../assets/pics/star.png", import.meta.url).href;
  return (
    <div className="restaurantCard">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${image}`}
        alt="restaurant-pic"
        className="restaurant-pic"
      />
      <div className="restroCardDetails">
        <p className="restaurant-name">{name}</p>
        <p className="ratings">
          <img src={star} width="20px" />
          {rating} <span className="time">{time} Minutes</span>
        </p>
        <p className="cuisines">{cuisines.join(", ")}</p>
        <p className="locality">{locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
