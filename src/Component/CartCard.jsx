// CartCard.js
import { useContext } from "react";
import { CartContext } from "./cartContext";
import "./card.css"

function CartCard({ item }) {
    const { image, name, price } = item;
    const { dispatch } = useContext(CartContext);

    function handleDelete() {
        dispatch({
            type: "delete",
            id: item.id
        });
    }

    return (
        <div className="box1">
            <div className="card">
                <div className="image">
                <img width="500" height="195" src={image} alt="" />
                </div>
                <h1>{name}</h1>
                <p>Rs .{price}</p>
           
            <div className="btn">
                <button onClick={handleDelete}>Delete</button>
            </div>
            </div>
        </div>
    );
}

export default CartCard;