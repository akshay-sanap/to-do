import React from "react";

const AddTodo = ({
  newTitle,
  setNewTitle,
  newDescription,
  setNewDescription,
  newDate,
  setNewDate,
  newTime,
  setNewTime,
  handleAddTodo,
  reset,
}) => {
  return (
    <div className="text-center">
     
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add New Task
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add New To-Do
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Title of the Task"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <input
                  type="text"
                  className="form-control"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Describe the details of the Task"
                />
              </div>
              <div className="date-time d-flex justify-content-evenly align-items-stretch">
                <div id="date">
                  <label>Date: </label>
                  <input
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                  />
                </div>
                <div id="time">
                  <label>Time: </label>
                  <input
                    type="time"
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={reset}>
                Clear
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={handleAddTodo}
              >
                Add task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
