import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyAlbum = () => {
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate();
  const getRandomImageId = () => Math.floor(Math.random() * 1000) + 1;

  const imageStyle = {
    height: "150px",
    objectFit: "cover",
  };

  useEffect(() => {
    const fetchAlbums = async () => {
      const userId = parseInt(localStorage.getItem("userId"), 10);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
      );
      const data = await response.json();
      setAlbums(data);
    };

    fetchAlbums();
  }, []);

  return (
    <>
      <h1>My Albums</h1>
      <div className="container mt-5">
        <div className="row">
          {albums.map((album) => (
            <div key={album.id} className="col-12 col-sm-6 col-lg-3 d-flex">
              <div
                className="card mb-4 w-100 shadow-sm d-flex flex-column"
                style={{
                  transition: "transform 0.2s ease",
                  cursor: "pointer",
                }}
                onClick={() => navigate(`/albums/${album.id}`)}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div className="container ">
                  <div className="row row-cols-2 row-cols-md-4 g-0">
                    {/* Generate random images with unique ids for each */}
                    {[...Array(4)].map((_, index) => (
                      <div className="" key={index}>
                        <img
                          src={`https://picsum.photos/id/${getRandomImageId()}/200`}
                          className="card-img-top"
                          alt="Img not found"
                          style={imageStyle}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{album.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyAlbum;
