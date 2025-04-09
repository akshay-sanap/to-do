import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

  const imageStyle = {
    height: "180px",
    objectFit: "cover",
  };

  const cards = [
    {
      title: "My To-Do List",
      text: "Small steps, big progress. Track, manage, and conquer your Goals.",
      img: "/images/todo.avif",
      btn: "Go to My To-dos",
      route: "/todos",
    },
    {
      title: "My Posts",
      text: "Share your thoughts with the world. Every post is a piece of your story.",
      img: "/images/quote2.avif",
      btn: "View Posts",
      route: "/posts",
    },
    {
      title: "My Albums",
      text: "Capture the moments that matter. Relive them anytime, anywhere. Moments fade, Memories don't.",
      img: "/images/photo1.avif",
      btn: "View Albums",
      route: "/albums",
    },
    {
      title: "My Friends",
      text: "Meet the people behind the posts. Browse profiles and discover their stories.",
      img: "/images/users.avif",
      btn: "View Users",
      route: "/users",
    },
  ];

  return (
    <>
      <h2 className="text-center mb-5">
        Welcome on Board, <span className="text-primary">{userName}</span>!
      </h2>

      <div className="container mt-5">
        <div className="row">
          {cards.map((card, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3 d-flex">
              <div
                className="card mb-4 w-100 shadow-sm d-flex flex-column"
                style={{
                  transition: "transform 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src={card.img}
                  className="card-img-top"
                  alt={card.title}
                  style={imageStyle}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                  <div className="mt-auto d-flex justify-content-center">
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate(card.route)}
                    >
                      {card.btn}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
