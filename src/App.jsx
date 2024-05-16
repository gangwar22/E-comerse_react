    import { useState } from "react";
    import Nav from "./Component/Nav"
    import Products from './Component/Products';
    import CartProvider from "./Component/cartContext";
    import Cart from "./Component/Cart"; 
    import "./App.css"

    // import Form from "./Login/Form";
    function App() {
        const [isCart, setIsCart] = useState(false);
        // const [isLogin,setIsLogin]=useState(false)

        return (
            <>
                
            {/* {isLogin ?  <CartProvider>
                    <main>
                        <Nav isCart={isCart} setIsCart={setIsCart} />
                        {isCart ? <Cart /> : <Products />}
                    </main>
                </CartProvider> :<Form setIsLogin={setIsLogin}/>}
                <Registration/> */}
                <CartProvider >
                    <Nav isCart={isCart} setIsCart={setIsCart} />
                    <div className="maincard">
                        {isCart ? <Cart /> : <Products />}
                    </div>
                </CartProvider> 
            </>
        );
    }

    export default App;