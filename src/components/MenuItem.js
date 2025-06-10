import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/store/cartSlice";

const MenuItem = ({ menuItem, isCartPage }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const uniqueId = `${menuItem?.id}-${Date.now()}-${Math.floor(
      Math.random() * 1000
    )}`;
    const newMenuItem = {
      ...menuItem,
      id: uniqueId,
    };
    dispatch(addItem(newMenuItem));
  };
  const handleRemoveItem = () => {
    dispatch(removeItem(menuItem));
  };
  return (
    <li className="menuItems">
      <div className="dish">
        <p className="bold">{menuItem?.name}</p>
        <p className="bold">
          ₹ {menuItem?.price / 100 || menuItem?.defaultPrice / 100}
        </p>
        <p>{menuItem?.description}</p>
      </div>
      <div className="dishImageCont">
        <img
          src={
            menuItem?.imageId
              ? "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                menuItem?.imageId
              : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
          }
          alt="Dish Pic"
        />
        <button
          className="addDish"
          onClick={isCartPage ? handleRemoveItem : handleAddToCart}
        >
          {isCartPage ? <p>Remove Item</p> : <p>Add to cart</p>}
        </button>
      </div>
    </li>
  );
};

export default MenuItem;
