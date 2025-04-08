import React from "react";

const DeleteModal = ({ index, deleteTask }) => {
  return (
    <div>
      <div
        class="modal fade"
        id={`deleteModal-${index}`}
        tabindex="-1"
        aria-labelledby={`deleteModal-${index}`}
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id={`deleteModal-${index}`}>
                Delete Task??
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Are You Sure? You wont be able to retrive it!!
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
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
