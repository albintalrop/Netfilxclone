import React,{useRef} from 'react';
import "../Signup/signup.css"
export default function Singnuppage() {
  const emailRef =useRef(null);
  const passwordRef=useRef(null)
  const register =(e) =>  {
    e.preventDefualt()
    auth.createUserwithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{
      console.log(authUser)

  }).catch((error)=>{
    alert(error.messsege)
  })
  const signIn=(e) =>  {
    e.preventDefault();
    console.log("hello");
  }
}
  return (
    <div className='main'>
      <div className="signupscreen">
      <img className='logo' src= {require("../../images/Netflixlogo.png")} />
      <button className="loginscreen_button">sigin</button>
        <form>
          <h1>Signin</h1>
          <input ref={emailRef} placeholder='Email' type="email" />
          <input ref={passwordRef}placeholder='password' type="password" />
          <button type='submit' onClick={signIn}>Signin</button>
          <h4>New to Netfilx ? sign up now</h4>

        </form>
      </div>
    </div>    

  )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
}
