import React, { createContext, useState } from 'react'
import Loginpage from './Login/Loginpage'
import Signin from './Signup/signin'

 export  const userContext=createContext()

function Context() {
    const [user,setUser]=useState("")
  return (
    <div>
        <userContext.Provider value={{user,setUser}}>
            <Signin />
        </userContext.Provider>
    </div>
  )
}

export default Context