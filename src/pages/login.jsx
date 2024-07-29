import React from "react";
import { auth ,googleProvider} from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = ({setIsAuth}) => {
  const navigate = useNavigate()
  const handleLogin = () => {
    signInWithPopup(auth , googleProvider)
    .then((result)=>{
      setIsAuth(true)
      localStorage.setItem("isAuth" , true)
      navigate("/")
    })
  }
  return (
    <div className="login page">
      <p>Sign In With Google To Continue</p>
      <button className="login-with-google-btn" onClick={handleLogin}>Sign In With Google</button>
    </div>
  );
};

export default Login;
