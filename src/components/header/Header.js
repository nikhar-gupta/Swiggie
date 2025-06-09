import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const logo = new URL("../../assets/pics/swiggie_logo.png", import.meta.url)
    .href;

  return (
    <nav className="header">
      <section className="logo">
        <img src={logo} height="100px" alt="logo" />
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
        <li className="nav-item">Cart</li>
      </ul>
    </nav>
  );
};

export default Header;
