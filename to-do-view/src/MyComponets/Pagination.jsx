import React from "react";

const Pagination = ({ totalPages, currentPage, paginate }) => {
  const startPage = Math.max(1, currentPage - 2); // Show up to 3 pages back
  const endPage = Math.min(totalPages, currentPage + 2); // Show up to 2 pages ahead
  return (
    <div className="d-flex justify-content-center">
      <button
        className="btn btn-outline-primary me-2"
        onClick={() => paginate(currentPage - 1)}
      >
        Previous
      </button>

      {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
        const pageNumber = startPage + index;
        return (
          <button
            key={pageNumber}
            className={`btn ${
              currentPage === pageNumber
                ? "btn-primary"
                : "btn-outline-secondary"
            } mx-1`}
            onClick={() => paginate(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        className="btn btn-outline-primary ms-2"
        onClick={() => paginate(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
