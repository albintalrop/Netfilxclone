import React, { useRef, useState } from "react";
import "../Signup/signup.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
export default function Singnuppage() {
    // const emailRef =useRef(null);
    // const passwordRef=useRef(null)
    // const register =(e) =>  {
    //   e.preventDefualt()
    //   auth.createUserwithEmailAndPassword(
    //     emailRef.current.value,
    //     passwordRef.current.value
    //   ).then((authUser)=>{
    //     console.log(authUser)

    // }).catch((error)=>{
    //   alert(error.messsege)
    // })
    // const signIn=(e) =>  {
    //   e.preventDefault();
    //   console.log("hello");
    // }
    const [loginemail, setLoginEmail] = useState("");
    const [loginpassword, setLoginPassword] = useState("");
    const [err, setErr] = useState("");

    const navigate = useNavigate();
    const Login = () => {
        signInWithEmailAndPassword(auth, loginemail, loginpassword)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // setUser(user)
                navigate("/home");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErr(errorMessage);
            });
    };

    return (
        <div className="main">
            <div className="signupscreen">
                <img
                    className="logo"
                    src={require("../../images/Netflixlogo.png")}
                />
                <button
                    className="loginscreen_button"
                    onClick={() => {
                        navigate("/signup");
                    }}
                >
                    Sign up
                </button>
                <form>
                    <h4>Sign in</h4>
                    <input
                        placeholder="Email"
                        type="email"
                        onChange={(e) => setLoginEmail(e.target.value)}
                    />
                    <input
                        placeholder="password"
                        type="password"
                        onChange={(e) => setLoginPassword(e.target.value)}
                    />
                    <div
                        type="submit"
                        onClick={() => {
                            Login();
                        }}
                    >
                        Signin
                    </div>
                    <h3>{err}</h3>
                    <h4>New to Netfil ? Sign up now </h4>
                </form>
            </div>
        </div>
    );
}
