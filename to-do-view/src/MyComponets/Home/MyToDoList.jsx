import React, { useEffect, useState } from "react";
import AddTodo from "../modals/AddTodo";
import Pagination from "../Pagination";
import EditModel from "../modals/EditModel";
import DeleteModal from "../modals/DeleteModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const MyToDoList = () => {
  const [task, setTask] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [editTask, setEditTask] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
  });

  // Pagination Logic
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTasks = task.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(task.length / itemsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
    setTask((prevTasks) => [...prevTasks, { ...newTask, completed: false }]);
  };

  const deleteTask = (index) => {
    setTask((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setTask((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // fetching data from API
  const fetchData = async () => {
    const userId = parseInt(localStorage.getItem("userId"), 10);

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
    );
    const data = await response.json();

    const formattedTasks = data.map((item) => ({
      title: item.title,
      description: "no description",
      date: "no date",
      time: "no time",
      completed: item.completed,
    }));

    setTask(formattedTasks);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap">
        <h1 className="mb-3">My To-do List</h1>
        <AddTodo addTask={addToDo} />
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle text-start">
          <thead className="table-warning">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th className="d-none d-md-table-cell" scope="col">
                Description
              </th>
              <th className="d-none d-lg-table-cell" scope="col">
                Date
              </th>
              <th className="d-none d-lg-table-cell" scope="col">
                Time
              </th>
              <th scope="col">Actions</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentTasks.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center">
                  No tasks available!!!
                  <button
                    type="button"
                    className="btn btn-primary m-3"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Add New Task
                  </button>
                </td>
              </tr>
            ) : (
              currentTasks.map((task, index) => {
                const actualIndex = indexOfFirstItem + index;
                return (
                  <tr key={actualIndex}>
                    <th scope="row">{actualIndex + 1}</th>
                    <td className="text-break">{task.title}</td>
                    <td className="d-none d-md-table-cell text-break">
                      {task.description}
                    </td>
                    <td className="d-none d-lg-table-cell">{task.date}</td>
                    <td className="d-none d-lg-table-cell">{task.time}</td>
                    <td>
                      <div className="d-none d-md-flex flex-wrap gap-2">
                        <button
                          type="button"
                          className="btn btn-outline-warning"
                          data-bs-toggle="modal"
                          data-bs-target={`#deleteModal-${actualIndex}`}
                        >
                          <FontAwesomeIcon
                            icon={faTrashCan}
                            style={{ color: "#fa0000" }}
                          />
                        </button>
                        <DeleteModal
                          key={`delete-${index}`}
                          index={actualIndex}
                          deleteTask={deleteTask}
                        />

                        {!task.completed && (
                          <>
                            <button
                              type="button"
                              className="btn btn-outline-info"
                              data-bs-toggle="modal"
                              data-bs-target={`#EditModel-${actualIndex}`}
                              onClick={() => editClick(actualIndex)}
                            >
                              <FontAwesomeIcon
                                icon={faPenToSquare}
                                style={{ color: "#00ddfa" }}
                              />
                            </button>
                            <EditModel
                              key={`edit-${index}`}
                              index={actualIndex}
                              editTask={editTask}
                              editChange={editChange}
                              saveEdit={saveEdit}
                            />

                            <button
                              type="button"
                              className="btn btn-outline-success"
                              onClick={() => toggleComplete(actualIndex)}
                            >
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{ color: "#07f223" }}
                              />
                            </button>
                          </>
                        )}
                      </div>

                      <div className="dropdown d-flex d-md-none">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Actions
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <button
                              type="button"
                              className="btn btn-outline-warning"
                              data-bs-toggle="modal"
                              data-bs-target={`#deleteModal-${actualIndex}`}
                            >
                              <FontAwesomeIcon
                                icon={faTrashCan}
                                style={{ color: "#fa0000" }}
                              />
                            </button>
                            <DeleteModal
                              key={`delete-${index}`}
                              index={actualIndex}
                              deleteTask={deleteTask}
                            />
                          </li>
                          {!task.completed && (
                            <>
                              <li>
                                <button
                                  type="button"
                                  className="btn btn-outline-info"
                                  data-bs-toggle="modal"
                                  data-bs-target={`#EditModel-${actualIndex}`}
                                  onClick={() => editClick(actualIndex)}
                                >
                                  <FontAwesomeIcon
                                    icon={faPenToSquare}
                                    style={{ color: "#00ddfa" }}
                                  />
                                </button>
                                <EditModel
                                  key={`edit-${index}`}
                                  index={actualIndex}
                                  editTask={editTask}
                                  editChange={editChange}
                                  saveEdit={saveEdit}
                                />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="btn btn-outline-success"
                                  onClick={() => toggleComplete(actualIndex)}
                                >
                                  <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    style={{ color: "#07f223" }}
                                  />
                                </button>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </td>
                    <td>
                      {task.completed ? (
                        <span className="badge bg-success">Done</span>
                      ) : (
                        <span className="badge bg-warning text-dark">
                          Pending
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default MyToDoList;
