import { Comment } from 'postcss';
import React, { useState }  from 'react'
import PostService from '../Services/post.service';

const PostItem = ({ id, fullName, text, datetime, comments}) => {
  const [textComments, setTextComments] = useState(comments); // State for new comment text
  const [newCommentText, setNewCommentText] = useState("");

    const handleCommentSubmit = (e) => {
      e.preventDefault();
      // Handle comment submission logic here (e.g., API call, state update)
      const userId = localStorage.getItem("currentUser");
      const newComment = {
        text: newCommentText,
        userId: userId,
      };
      PostService.comment(id, newComment)
        .then((response) => {
          console.log("Comment submitted:", response.data);
          setTextComments([...textComments, response.data]); // Update the comments state
        })
        .catch((error) => {
          console.error("Error submitting comment:", error);
        });
      
      console.log("Comment submitted:", newCommentText);
      setNewCommentText(""); // Clear the input field
    };
    // const dummyComments = [
    //   { user: { fullName: "Commenter 1" }, text: "This is the first comment." },
    //   {
    //     user: { fullName: "Commenter 2" },
    //     text: "And this is the second comment.",
    //   },
    // ];

    return (
      <div className="mb-4 p-4 bg-white rounded-lg shadow">
        <div className="flex items-start mb-2">
          {" "}
          {/* Added margin bottom */}
          <div className="w-12 h-12 rounded-full bg-gray-300 mr-3">
            {/* Simple Avatar */}
          </div>
          <div>
            <h3 className="font-bold">{fullName}</h3>
            <p className="text-gray-800">{text}</p>
            <p className="text-gray-500 text-sm mt-1">{datetime}</p>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-2">
          {" "}
          {/* Added margin top */}
          {textComments.map((comment, index) => (
            <div key={index} className="mb-2 p-2 bg-gray-100 rounded-md">
              {" "}
              {/* Added margin bottom, padding, background, and rounded corners */}
              <div className="font-bold text-sm">{comment.user.name}</div>{" "}
              {/* Smaller font for commenter name */}
              <p className="text-sm">{comment.text}</p>{" "}
              {/* Smaller font for comment text */}
            </div>
          ))}
          {/* Add Comment Form */}
          <form onSubmit={handleCommentSubmit} className="mt-4">
            {" "}
            {/* Added margin top */}
            <div className="flex">
              <input
                type="text"
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                placeholder="Write a comment..."
                className="w-full border rounded-md p-2 mr-2" // Added margin right
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default PostItem