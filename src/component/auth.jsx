import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword ,signInWithPopup, signOut} from "firebase/auth";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(auth?.currentUser?.photoURL)
  const handleSignIn = async (e) => {
    try{
      await createUserWithEmailAndPassword(auth, email, password);
    }
    catch (error){
      console.log(error)
    }
  };

  const signInWithGoogle = async (e) => {
    try{
      await signInWithPopup(auth, googleProvider);
    }
    catch (error){
      console.log(error)
    }
  };


  const handleLogout = async (e) => {
    try{
      await signOut(auth);
    }
    catch (error){
      console.log(error)
    }
  };

  

  return (
    <div>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email...."
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password...."
      />
      <button onClick={handleSignIn}>sign in</button>

      <button onClick={signInWithGoogle}>Sign in with google</button>


      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Auth;
