import { useContext } from "react";
import { CartContext } from "./cartContext";
import CartCard from "./CartCard";
import "./card.css"


function Cart() {
    const { shopping: { cart } } = useContext(CartContext);
    const cartCards = cart.map(item => <CartCard key={item.id} item={item} />);

    return (
        <section className="products">
            {cartCards}
        </section>
    );
}

export default Cart;