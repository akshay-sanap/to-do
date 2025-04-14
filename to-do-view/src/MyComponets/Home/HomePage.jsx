import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar"; // Ensure Sidebar is correctly imported

const HomePage = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");
  const [selectedOption, setSelectedOption] = useState(null); // Initially, no option is selected
  const [showSidebar, setShowSidebar] = useState(false); // Sidebar is hidden initially

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

  const handleCardClick = (route) => {
    setSelectedOption(route); // Set the selected option
    setShowSidebar(true); // Show the sidebar
    navigate(route); // Navigate to the selected route
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "todos":
        return <MyToDoList />; // Replace with the actual component for MyToDoList
      case "posts":
        return <MyPosts />; // Replace with the actual component for MyPosts
      case "albums":
        return <MyAlbum />; // Replace with the actual component for MyAlbum
      case "users":
        return <UserList />; // Replace with the actual component for UserList
      default:
        return <h3>Please select an option from the homepage</h3>;
    }
  };

  return (
    <div className="d-flex">
      {/* Sidebar: Show only if showSidebar is true */}
      {showSidebar && <Sidebar onSelect={setSelectedOption} />}

      <div className={`flex-grow-1 p-4 ${showSidebar ? "ml-250" : ""}`}>
        <h2 className="text-center mb-4">
          Welcome on Board, <span className="text-primary">{userName}</span>!
        </h2>
        {selectedOption ? (
          renderContent() // Render selected content
        ) : (
          <div className="container mt-5">
            <div className="row">
              {/* Card layout */}
              {cards.map((card, index) => (
                <div key={index} className="col-12 col-sm-6 col-lg-3 d-flex">
                  <div
                    className="card mb-4 w-100 shadow-sm d-flex flex-column"
                    style={{
                      transition: "transform 0.2s ease",
                      cursor: "pointer",
                    }}
                    onClick={() => handleCardClick(card.route)} // When a card is clicked, show sidebar and set route
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
                          onClick={() => handleCardClick(card.route)} // Navigate to selected route
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
        )}
      </div>
    </div>
  );
};

export default HomePage;
