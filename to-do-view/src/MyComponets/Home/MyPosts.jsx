import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Comments from "./Comments";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const userId = parseInt(localStorage.getItem("userId"), 10);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mt-4">
      <h1>My Posts</h1>

      <div class="accordion accordion-flush" id="accordionFlushExample">
        {posts.map((post) => (
          <div
            class="accordion-item"
            // onMouseEnter={(e) => {
            //   e.currentTarget.style.transform = "scale(1.05)";
            //   e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
            //   e.currentTarget.style.transition = "all 0.3s ease";
            // }}
            // onMouseLeave={(e) => {
            //   e.currentTarget.style.transform = "scale(1)";
            //   e.currentTarget.style.boxShadow = "none";
            // }}
          >
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse${post.id}`}
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <h6> {post.title}</h6>
              </button>
            </h2>
            <div
              id={`flush-collapse${post.id}`}
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <strong>Discription:</strong>
                <br />
                <span>{post.body}</span>
                <br />
                <Comments postId={post.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
