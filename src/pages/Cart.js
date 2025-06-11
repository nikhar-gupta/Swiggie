import { useDispatch, useSelector } from "react-redux";
import MenuItem from "../components/MenuItem";
import "./cart.css";
import { clearCart } from "../utils/store/cartSlice";
import { Flip, toast } from "react-toastify";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const notifyCartCleared = () =>
    toast.error("Cart cleared!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
    });
  const handleClearCart = () => {
    dispatch(clearCart());
    notifyCartCleared();
  };
  return (
    <div className="cart">
      <div className="cartHeader">
        <h1 className="headings">Cart</h1>
        {cartItems.length === 0 ? (
          <h2 className="headings" style={{ marginTop: "1rem" }}>
            Feeling hungry? Grab your favourite dish!
          </h2>
        ) : (
          <button id="clearCartBtn" onClick={handleClearCart}>
            <p>Clear Cart</p>
          </button>
        )}
      </div>
      {cartItems.map((item) => {
        return <MenuItem menuItem={item} key={item?.id} isCartPage={true} />;
      })}
    </div>
  );
};

export default Cart;
