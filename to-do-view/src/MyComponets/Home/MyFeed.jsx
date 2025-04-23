import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Comments from "./Comments";

const MyFeed = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getRandomImageId = () => Math.floor(Math.random() * 1000) + 1;

  const imageStyle = {
    height: "150px",
    objectFit: "cover",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = parseInt(localStorage.getItem("userId"), 10);
        const [albumsRes, postsRes] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`),
          fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
        ]);

        const albumsData = await albumsRes.json();
        const postsData = await postsRes.json();

        const merged = albumsData.map((album) => {
          const matchedPost = postsData.find((post) => post.id === album.id);
          return { ...album, post: matchedPost };
        });

        setAlbums(merged);
      } catch (err) {
        console.error("Error fetching user content:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center mt-4">Loading albums and posts...</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">My Albums & Posts</h1>
      <div className="row">
        {albums.map((album) => (
          <div key={album.id} className="col-12 col-sm-6 col-lg-4 d-flex">
            <div
              className="card mb-4 w-100 shadow-sm"
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
              onClick={() => navigate(`/albums/${album.id}`)}
            >
              {/* Album Images */}
              <div className="container">
                <div className="row row-cols-2 g-0">
                  {[...Array(4)].map((_, index) => (
                    <div key={index}>
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

              {/* Album + Post Content */}
              {/* Inside .card-body */}
              <div className="card-body">
                <h5 className="card-title">Album: {album.title}</h5>

                {album.post ? (
                  <h6 className="text-muted">Post: {album.post.title}</h6>
                ) : (
                  <p className="text-muted">No matching post for this album.</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFeed;
