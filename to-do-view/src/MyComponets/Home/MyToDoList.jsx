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
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    const userId = parseInt(localStorage.getItem("userId"), 10);
    const userTasks = data.filter((item) => item.userId === userId);

    const formattedTasks = userTasks.map((item) => ({
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
      <div className="d-flex justify-content-between">
        <h1>My To-do List</h1>
        <AddTodo addTask={addToDo} />
      </div>
      <div className="table-responsive">
        <table class="table table-bordered table-hover align-middle ">
          <thead className="table-warning">
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Actions</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentTasks.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center ">
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
              currentTasks.map((task, index) => {
                const actualIndex = indexOfFirstItem + index;

                return (
                  <tr key={actualIndex}>
                    <th scope="row">{indexOfFirstItem + index + 1}</th>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.date}</td>
                    <td>{task.time}</td>
                    <td className="d-flex">
                      <button
                        type="button"
                        class="btn btn-outline-warning me-2"
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

                      <button
                        type="button"
                        class="btn btn-outline-warning me-2"
                        data-bs-toggle="modal"
                        data-bs-target={`#EditModel-${actualIndex}`}
                        onClick={() => editClick(actualIndex)}
                        style={{
                          display: task.completed ? "none" : "inline-block",
                        }}
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
                        disabled={task.completed}
                        style={{
                          display: task.completed ? "none" : "inline-block",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          style={{ color: "#07f223" }}
                        />
                      </button>
                    </td>
                    <td>
                      {task.completed ? (
                        <span className="text-bg-success p-1 btn-group-vertical ">
                          Success
                        </span>
                      ) : (
                        <span className="text-bg-warning p-1 btn-group-vertical">
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
