import React, { useState } from "react";
import AddTodo from "./AddTodo";

const MyToDoList = () => {
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setnewDescription] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");

  const handleAddTodo = () => {
    let newTodo = {
      title: newTitle,
      description: newDescription,
      date: newDate,
      time: newTime,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]); 
    reset();
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      title: "",
      description: "",
      date: "",
      time: "",
    });
  };

  return (
    <div className="mt-3 mb-3">
      <div className="text-center">
        <AddTodo
          newTitle={newTitle}
          setNewTitle={setNewTitle}
          newDescription={newDescription}
          setNewDescription={setnewDescription}
          newDate={newDate}
          setNewDate={setNewDate}
          newTime={newTime}
          setNewTime={setNewTime}
          handleAddTodo={handleAddTodo}
          reset={reset}
        />
      </div>

      <div id="to-do-list">
        {allTodos.map((item, index) => {
          return (
            <table
              class="table w-50 table-success table-striped-columns position-absolute top-25 start-25 mt-20 translate-start"
              key={index}
            >
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{item.title}</th>
                  <td>{item.description}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>
                    <button type="button" class="btn btn-secondary me-2 btn-sm">
                      <span class="material-symbols-outlined">edit</span>
                    </button>
                    <button type="button" class="btn btn-danger me-2 btn-sm">
                      <span class="material-symbols-outlined">delete</span>
                    </button>
                    <button type="button" class="btn btn-success btn-sm">
                      <span class="material-symbols-outlined">
                        check_circle
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </div>
  );
};

export default MyToDoList;
