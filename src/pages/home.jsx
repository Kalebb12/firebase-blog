import { collection, getDocs,doc ,deleteDoc} from "firebase/firestore"
import { useEffect, useState } from "react"
import { db ,auth } from "../config/firebase"

const Home = ({isAuth}) => {
  const postColRef = collection(db, "posts")
  const [postList , setPostList] = useState([])
  useEffect(()=>{
    const getPost = async () =>{
      const  data = await getDocs(postColRef)
      setPostList(data.docs.map((doc) =>({...doc.data() , id: doc.id})));
    }

    getPost()
  },[])

  const handleDelete = async (postId) => {
    const post = doc(db ,"posts" , postId)
    await deleteDoc(post)
  }
  return (
    <div className="homePage">
      {
        postList.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            {isAuth && auth.currentUser.uid === post.author.id && <button onClick={()=>{handleDelete(post.id)}}> &#128465;</button>}
            <p>{post.post}</p>
            <h3>@{post.author.name}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default Home