import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const MyToDoList = () => {
  const [task, setTask] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
  });

  const editClick = (index) => {
    setEditIndex(index);
    setEditTask(task[index]);
  };

  const editChange = (e) => {
    const { name, value } = e.target;
    setEditTask((prev) => ({ ...prev, [name]: value }));
  };

  const saveEdit = () => {
    setTask((prevTasks) =>
      prevTasks.map((t, i) => (i === editIndex ? editTask : t))
    );
    setEditIndex(null);
  };

  const addToDo = (newTask) => {
    setTask((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (index) => {
    setTask((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };
  return (
    <>
      <div className="d-flex justify-content-between">
        <Header />
        <AddTodo addTask={addToDo} />
      </div>
      <div className="table-responsive">
        <table class="table table-striped ">
          <thead>
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {task.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center ">
                  No tasks available!!!
                  <button
                    type="button"
                    className="btn btn-primary m-5"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Add New Task
                  </button>
                </td>
              </tr>
            ) : (
              task.map((task, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{task.date}</td>
                  <td>{task.time}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-warning me-2"
                      data-bs-toggle="modal"
                      data-bs-target={`#deleteModal-${index}`}
                    >
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        style={{ color: "#fa0000" }}
                      />
                    </button>

                    <div
                      class="modal fade"
                      id={`deleteModal-${index}`}
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
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

                    <button
                      type="button"
                      class="btn btn-outline-secondary me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#editmodel"
                      onClick={() => editClick(index)}
                    >
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        style={{ color: "#00ddfa" }}
                      />
                    </button>

                    <div
                      class="modal fade"
                      id="editmodel"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabindex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1
                              class="modal-title fs-5"
                              id="staticBackdropLabel"
                            >
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
                    <button type="button" className="btn btn-outline-success">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        style={{ color: "#07f223" }}
                      />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToDoList;
