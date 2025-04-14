import React from "react";
import "./DeleteModal.css";

const DeleteModal = ({ index, deleteTask }) => {
  return (
    <div>
      <div
        className="modal fade"
        id={`deleteModal-${index}`}
        tabIndex="-1"
        aria-labelledby={`deleteModal-${index}`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`deleteModal-${index}`}>
                Delete Task??
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are You Sure? You won't be able to retrieve it!!
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                data-bs-dismiss="modal"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
