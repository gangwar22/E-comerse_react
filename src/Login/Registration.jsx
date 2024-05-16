// Registration.js
import { useState } from "react";
import "../Login.css";

function Registration({ setShowLogin }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleRegister = async () => {
        const res = await fetch("https://fullstack-ecom-render.onrender.com/account/register/", {
            method: "post",
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        });

        if (res.status === 200) {
            setRegistrationSuccess(true);
            setTimeout(() => {
                setShowLogin(true);
            }, 3000);
        } else {
            setIsError(true);
            setTimeout(() => {
                setIsError(false);
            }, 3000);
        }
    };

    return (
        <div className="main">
            <h1>Registration</h1>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <a onClick={() => setShowLogin(false)} href="#">Login</a>
            {registrationSuccess && <p>Registration successful!</p>}
            {isError && <p>Registration failed.</p>}
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default Registration;
