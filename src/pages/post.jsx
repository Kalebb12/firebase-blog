import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../config/firebase.js";
import {useNavigate} from "react-router-dom"
const Post = ({isAuth}) => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const postColRef = collection(db, "posts");
  const navigate = useNavigate()
  const handleCreatePost = async () => {
    await addDoc(postColRef, {
      title,
      post,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/")
  };

  useEffect(()=>{
    if(!isAuth){ navigate("/login")}
  },[])
  return (
    <div className="create-post">
      <div className="cp-container">
        <h2>Create a post</h2>
        <div className="input-container">
          <label htmlFor="">title:</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            placeholder="title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="">post:</label>
          <br />
          <textarea
            name="post"
            placeholder="post..."
            required
            rows={3}
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
        </div>
        <br />

        <button type="submit" onClick={handleCreatePost}>Submit</button>
      </div>
    </div>
  );
};

export default Post;
