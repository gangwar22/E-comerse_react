// Login.js
import { useState } from "react";
import "../Login.css";

function Login({ setIsLogin, setShowLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginFailed, setLoginFailed] = useState(false);

    const handleLogin = async () => {
        const res = await fetch("https://fullstack-ecom-render.onrender.com/account/login/", {
            method: "post",
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        if (res.status === 200) {
            setIsLogin(true);
            console.log(res)
        } else {
            setLoginFailed(true);
        }
    };

    return (
        <div className="main">
            <h1>Login</h1>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <a onClick={() => setShowLogin(false)} href="#">Registration</a>
            {loginFailed && <p>Login Failed! Invalid username or password.</p>}
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
