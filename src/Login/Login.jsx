import { useState } from "react"
import "../Login.css"
import Registration from "./Registration"

function Login({setIsLogin,setShowLogin}) {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [loginFailed,setLoginFailed]=useState(false)
    const [showRagistration,setShowRagistration]=useState(false)


    const handelLogin=async()=>{
        const res=await fetch("http://fulllstack-ecom-render.onrender.com/account/login/",
        {
            method:"post",
            headers:{
                'Accept':"application/json",
                'Content-Type':"application/json"
            },
            body:JSON.stringify({
                username:username,
                password:password
            })
        }
    )
    if (res.status===200){
        setIsLogin(true)
    }else{
        setLoginFailed(true)
    }
    
}


  return (
        <>
            {
        showRagistration ? <Registration/>:
        <div className="main">
        <h1>Login</h1>
        <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="Password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <a onClick={()=>setShowLogin(false)} href="#">Ragistration</a>
       {loginFailed &&  <p>Login Falied! iInvalid username or password</p>}
        <button onClick={handelLogin}>Login</button>
    </div>
    }
        </>
   
  )
}

export default Login