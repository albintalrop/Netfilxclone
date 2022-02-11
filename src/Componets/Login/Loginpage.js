
import './login.css';
import React, { useState } from 'react';
import Signuppage from '../Signup/Singnuppage';


export default function Loginpage() {
    const[signIn,setSignin]=useState(false)
  return (
      <div className='loginscreen'>

          
          <div className="loginScreen_background">
          <div className="llinear">
            <img className='logo' src= {require("../../images/Netflixlogo.png")} />
            <button onClick={() =>setSignin(true)} className="loginscreen_button">signup</button>
                </div>
                <div className="loginScreenbody">
                {signIn ?(
                    <Signuppage />

                ):(
                
                <>
                    <h1>
                        Unlimited movies, TV shows and more.
                    </h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="get">
                        <form>
                            <input type="email" placeholder='email'     />
                            <button className='getbutton'>get started</button>
                        </form>
                    </div>
                </>
                )}
                
            </div>


          </div>
      </div>
  )
}
