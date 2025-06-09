import React from "react";

const MenuItem = ({ menuItem }) => {
  return (
    <li className="menuItems">
      <div className="dish">
        <p className="bold">{menuItem?.card?.info?.name}</p>
        <p className="bold">
          ₹{" "}
          {menuItem?.card?.info?.price / 100 ||
            menuItem?.card?.info?.defaultPrice / 100}
        </p>
        <p>{menuItem?.card?.info?.description}</p>
      </div>
      <div className="dishImageCont">
        <img
          src={
            menuItem?.card?.info?.imageId
              ? "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                menuItem?.card?.info?.imageId
              : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
          }
          alt="Dish Pic"
        />
        <button className="addDish">
          <p>Add to cart</p>
        </button>
      </div>
    </li>
  );
};

export default MenuItem;
