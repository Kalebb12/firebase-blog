import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Post from "./pages/post";
import Login from "./pages/login";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebase";
function App() {
  const [isAuth ,setIsAuth] = useState( localStorage.getItem('isAuth'))
  
  // useEffect(() => {
  //   const authStatus =;
  //   if (authStatus!== null) {
  //     setIsAuth(JSON.parse(authStatus));
  //   }
  // }, []);

  const navigate = useNavigate()
  const handleLogout = () =>{
    signOut(auth)
    setIsAuth(false)
    localStorage.setItem('isAuth', false)
    navigate("/login")
  }
  return (
    <div>
      <nav>
        <Link to="/" >Home</Link>
        {isAuth && <Link to="/CreatePost">Create Post</Link>}
        {!isAuth ? <Link to="/login" >login</Link> : <p onClick={handleLogout}>logout</p>}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>} />
        <Route path="/createPost" element={<Post  isAuth={isAuth} />} />
        <Route path="/login" element={<Login  setIsAuth={setIsAuth}/>} />
      </Routes>
    </div>
  );
}

export default App;
