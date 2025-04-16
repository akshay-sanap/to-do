import React, { useEffect, useState } from "react";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      const data = await response.json();
      setComments(data);
    };

    fetchComments();
  }, []);
  return (
    <>
      <strong className="mb-3">Comments:</strong>
      <div className="mt-3 mt-3 align-items-start">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="mb-3 p-3 border rounded shadow-sm bg-white"
          >
            <p className="mb-1">
              <strong>Name:</strong>{" "}
              <span className="text-dark">{comment.name}</span>
            </p>
            <p className="mb-1">
              <strong>Email:</strong>{" "}
              <span className="text-primary fst-italic">{comment.email}</span>
            </p>
            <p className="mb-0">
              <strong>Comment:</strong> {comment.body}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Comments;
