import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MyPhotos = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  console.log("albumId from props or route:", albumId);
  const getRandomImageId = () => Math.floor(Math.random() * 1000) + 1;

  const imageStyle = {
    height: "150px",
    objectFit: "cover",
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
      );
      const data = await response.json();
      setPhotos(data);
    };

    fetchPhotos();
  }, [albumId]);

  return (
    <>
      <h2 className=" mt-4">My Photos</h2>
      <div className="container mt-5">
        <div className="row">
          {photos.map((photo) => (
            <div key={photo.id} className="col-12 col-sm-6 col-lg-3 d-flex">
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
                  src={`https://picsum.photos/id/${getRandomImageId()}/200`}
                  className="card-img-top"
                  alt={photo.title}
                  style={imageStyle}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-truncate">{photo.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyPhotos;
