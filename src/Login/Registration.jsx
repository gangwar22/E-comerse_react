import { useState } from "react"
import "../Login.css"
import Login from "./Login"
function Registration({setShowLogin}) {

    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const [isError,setIsError]=useState(false)
    const [loginSuccess,setLoginSuccess]=useState(false)
    
    const handelRagister=async()=>{
        const res = await fetch("http://your-registration-endpoint.com", {
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
    }


  return (
    <div className="main">
        <h1>Ragistration</h1>
        <input type="usrname" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
       <a onClick={()=>setShowLogin(false)} href="#">Login</a>
       {loginSuccess && <p>A user with the email address already exist! </p>}
       {isError && <p>Ragistration suceessful </p>}
        <button onClick={handelRagister}>Ragistration</button>
    </div>
  )
}

export default Registration