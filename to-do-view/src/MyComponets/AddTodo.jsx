import React, { useState } from "react";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const reset = () => {
    setTitle(""), setDescription(""), setDate(""), setTime("");
  };

  return (
    <div className="">
      <>
        {/* Add New Task Button */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Add New Task
        </button>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          {/* Model form  */}
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Assign To-do
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Title for the task"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label for="floatingInput">Title</label>
                </div>
                <div class="form-floating">
                  <textarea
                    class="form-control mb-3"
                    name="description"
                    id=""
                    rows="10"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                  <label for="floatingTextarea">Description</label>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <label htmlFor="taskDate" className="me-2">
                    Date:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <label htmlFor="taskTime" className="ms-2">
                    Time:
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </div>
              {/* Model Footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={reset}
                >
                  Clear
                </button>
                <button type="button" className="btn btn-success">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default AddTodo;
