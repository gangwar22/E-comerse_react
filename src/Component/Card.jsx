import { useContext } from "react";
import { CartContext } from "./cartContext";
import "./card.css";

function Card({ data }) {
    const { image, name, description, price } = data;
    const { shopping: { cart }, dispatch } = useContext(CartContext);

    const addToCart = () => {
        if (cart.some(item => item.id === data.id)) return;
        dispatch({
            type: "add",
            product: data
        });
    };

    return (
        <>
            <div className="box1">
                <div className="card">
                    <div className="image">
                        <img width="500" height="195" src={image} alt={name} />
                    </div>
                    <div className="info">
                        <h3>{name}</h3>
                        <div className="id">
                            <p>{description}</p>
                            <p className="red">Rs. {price}</p>
                        </div>
                    </div>
                    <div className="btn">
                        <button onClick={addToCart} className="btn2">Add to Cart</button>
                    </div>
                </div>
            </div>
           
        </>
    );
}

export default Card;
