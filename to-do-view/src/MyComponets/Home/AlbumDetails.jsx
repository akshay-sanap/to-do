import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Comments from "./Comments";
import Pagination from "../HeaderFooter/Pagination";

const AlbumDetails = () => {
  const navigate = useNavigate();
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);
  const [post, setPost] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem("userId");

  const getRandomImageId = () => Math.floor(Math.random() * 1000) + 1;

  //   Pagination Logic
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 10;
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);
  const totalPages = Math.ceil(photos.length / photosPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const [albumRes, postRes, photosRes] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`),
          fetch(`https://jsonplaceholder.typicode.com/posts/${albumId}`),
          fetch(
            `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
          ),
        ]);

        const albumData = await albumRes.json();
        const postData = await postRes.json();
        const photosData = await photosRes.json();

        setAlbum(albumData);
        setPost(postData);
        setPhotos(photosData);
      } catch (err) {
        console.error("Error fetching album, post, or photos details", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [albumId]);

  if (!userId) return navigate("/");
  if (loading)
    return <div className="text-center mt-4">Loading details...</div>;

  return (
    <div className="container mt-5">
      <h3 className="card-title text-center mb-4">
        Album Title: {album.title}
      </h3>
      <div className="card shadow">
        <div className="card-body">
          <div className="row">
            {/* Left Column: Photos */}
            <div className="col-md-6">
              <div className="row">
                {currentPhotos.map((photo) => (
                  <div key={photo.id} className="col-6 mb-3">
                    <img
                      src={`https://picsum.photos/id/${getRandomImageId()}/150`}
                      alt={photo.title}
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "200px",
                        width: "100%",
                      }}
                    />
                  </div>
                ))}
              </div>
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                paginate={paginate}
              />
            </div>

            {/* Right Column: Post and Comments */}
            <div className="col-md-6">
              {post && (
                <>
                  <h5 className="mt-3">Post Title: {post.title}</h5>
                  <p>{post.body}</p>
                  <h6 className="mt-4">Comments:</h6>
                  <div className="card bg-light p-3">
                    <Comments postId={post.id} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetails;
