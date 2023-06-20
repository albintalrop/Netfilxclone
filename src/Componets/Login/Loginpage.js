import "./login.css";
import React, { useContext, useState } from "react";
import Signuppage from "../Signup/signin";
import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
// import { userContext } from "../Context";

export default function Loginpage() {
//    const {user,setUser}= useContext(userContext)
    const [signIn, setSignin] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const signup = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const useritem = userCredential.user;
                // setUser(useritem)
                navigate("/signin");

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;

                const errorMessage = error.message;
                setErr(errorMessage);
                // ..
            });
    };
    return (
        <div className="loginscreen">
            <div className="loginScreen_background">
                <div className="llinear">
                    <img
                        className="logo"
                        src={require("../../images/Netflixlogo.png")}
                    />
                    <button
                        onClick={() => navigate("/signin")}
                        className="loginscreen_button"
                    >
                        signup
                    </button>
                </div>
                <div className="loginScreenbody">
                    <>
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <p>
                            Ready to watch? Enter your email to create or
                            restart your membership.
                        </p>
                        <div className="get">
                            <form>
                                <input
                                    type="email"
                                    placeholder="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                <div className="getbutton" onClick={signup}>
                                    get started
                                </div>
                                <h3>{err}</h3>
                            </form>
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
}
