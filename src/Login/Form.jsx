// Form.js
import { useState } from "react";
import Login from "./Login";
import Registration from "./Registration";

function Form({ setIsLogin }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <>
            {showLogin ? <Login setIsLogin={setIsLogin} setShowLogin={setShowLogin} /> : <Registration setShowLogin={setShowLogin} />}
        </>
    );
}

export default Form;
