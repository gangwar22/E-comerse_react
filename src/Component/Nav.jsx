import "../App.css";
import { useContext } from "react";
import { CartContext } from "./cartContext";
function Nav({ isCart, setIsCart }) {

  const { shopping: { cart } } = useContext(CartContext);

  return (
    <header className="main_1_div">
      <nav className="navbar">
        <h1>Products</h1>
        <a
          href="#"
          className="back"
          onClick={(e) => {
            e.preventDefault();
            setIsCart(!isCart);
          }}
        >
          Cart({cart.length})
        </a>
      </nav>
    </header>
  );
}

export default Nav;




