import { useState } from "react"
import Login from "./Login"
import Registration from "./Registration"

function Form({setIsLogin}) {
    const [showLogin,setSowLogin]=useState(true)
  return (
    <>
        {showLogin ? <Login setIsLogin={setIsLogin} setSowLogin={setSowLogin}/>:<Registration setSowLogin={setIsLogin}/>}
    </>
  )
}

export default Form