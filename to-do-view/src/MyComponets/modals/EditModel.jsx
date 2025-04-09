    import React from "react";

    const EditModel = ({ index, editChange, editTask, saveEdit }) => {
    return (
        <div>
        <div
            class="modal fade"
            id={`EditModel-${index}`}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby={`EditModel-${index}`}
            aria-hidden="true"
        >
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h1 class="modal-title fs-5" id={`EditModel-${index}`}>
                    Edit Task
                </h1>
                <button
                    type="button"
                    class="btn-close"
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
                    name="title"
                    placeholder="Title for the task"
                    value={editTask.title}
                    onChange={editChange}
                    required
                    />
                    <label for="floatingInput">
                    Title <span className="text-danger">*</span>
                    </label>
                </div>
                <div class="form-floating">
                    <textarea
                    class="form-control mb-3"
                    name="description"
                    id=""
                    rows="10"
                    value={editTask.description}
                    onChange={editChange}
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
                    name="date"
                    value={editTask.date}
                    onChange={editChange}
                    />
                    <label htmlFor="taskTime" className="ms-2">
                    Time:
                    </label>
                    <input
                    type="time"
                    className="form-control"
                    name="time"
                    value={editTask.time}
                    onChange={editChange}
                    />
                </div>
                </div>

                <div class="modal-footer">
                <button
                    type="button"
                    class="btn btn-outline-secondary"
                    data-bs-dismiss="modal"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    class="btn btn-outline-success"
                    onClick={saveEdit}
                    data-bs-dismiss="modal"
                >
                    Update
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default EditModel;
