import React, { useContext, useRef, useState } from "react";
import "../Signup/signup.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { userContext } from "../Context";
export default function Signin() {
    const { user,setUser } = useContext(userContext);
    const [loginemail, setLoginEmail] = useState("");
    const [loginpassword, setLoginPassword] = useState("");
    const [err, setErr] = useState("");
    const [errmsg, setErrmsg] = useState("");

    const navigate = useNavigate();
    const Login = () => {
        signInWithEmailAndPassword(auth, loginemail, loginpassword)
            .then((userCredential) => {
                // Signed in

                setUser(userCredential.user.uid);
             

                navigate("/home");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErr(errorMessage);
            });
    };
    console.log(user, "RRRRR");

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
                        className="button"
                        type="submit"
                        onClick={() => {
                            Login();
                        }}
                    >
                        Signin
                    </div>
                    <h3>{err}</h3>
                    <h4>New to Netfilx 2.0? Sign up now </h4>
                </form>
            </div>
        </div>
    );
}
