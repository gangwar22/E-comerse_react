import  { createContext, useReducer } from "react";
import { faker } from '@faker-js/faker';
import cartReducer from "./cartReducer";

export const CartContext = createContext();

function CartProvider({ children }) {

    let products = [];

    for (let i = 0; i <40; i++) {
        products.push({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
            image: faker.image.image()

        });
    }

   

  const [shopping, dispatch] = useReducer(cartReducer,{
    products,
    cart: []
  });

  return (
    <CartContext.Provider value={{ shopping, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider ;
