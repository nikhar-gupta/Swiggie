import { Link } from "react-router-dom";
import "./header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const logo = new URL("../../assets/pics/swiggie_logo.png", import.meta.url)
    .href;
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <nav className="header">
      <section className="logo">
        <Link to="/">
          <img src={logo} height="100px" alt="logo" />
        </Link>
      </section>
      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart">Cart {cartItems.length}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
