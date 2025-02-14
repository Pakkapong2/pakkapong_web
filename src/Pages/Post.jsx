import React, { useState, useEffect} from "react";
import Layout from "../components/Layout";
import PostItem from "./PostItem";
import PostService from "../Services/post.service";

const Post = () => {
  const [postText, setPostText] = useState("");
 

  const handlePostSubmit = (e) => {
    e.preventDefault();
    // Handle post submission logic here (e.g., API call, state update)
    const authorId = localStorage.getItem("currentUser")
    const postData = {
      title:"",
      content:postText,
      authorId:authorId
    }
    PostService.create(postData)
      .then((response)=> {
        console.log(response.data);
        fetchPosts();
        alert("Post Success!")
      })
      .catch((e)=>{
        console.log(e)
      })
    console.log("Post submitted:", postText);
    setPostText(""); // Clear the textbox after posting
  };

  const [posts, setPosts] = useState([]);
  const fetchPosts = () => {
    PostService.get()
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(()=>{
    fetchPosts();
  },[]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Create Post Section */}
        <div className="mb-8 p-4 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Create a Post</h2>
          <form onSubmit={handlePostSubmit}>
            <textarea
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              className="w-full h-24 p-2 border rounded-md mb-4"
              placeholder="What's on your mind?"
            />
            <button
              type="submit"
              onClick={handlePostSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Post
            </button>
          </form>
        </div>

        {/* Display Posts Section - Static Content */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Posts</h2>

          {posts.map((post) =>(
            <PostItem
              key={post.id}
              id={post.id}
              fullName={post.author.name}
              text={post.content}
              datetime={"Today"}
              comments={post.comments}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Post;
