import React from "react";
import AddTodo from "./AddTodo";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const MyToDoList = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <Header />
        <AddTodo />
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
            <tr>
              <th scope="row">1</th>
              <td>gym</td>
              <td>I have to do leg workout todat</td>
              <td>02-04-2025</td>
              <td>7.00 PM</td>
              <td>
                <button type="button" className="btn btn-outline-warning me-2">
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    style={{ color: "#fa0000" }}
                  />
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary me-2"
                >
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    style={{ color: "#00ddfa" }}
                  />
                </button>
                <button type="button" className="btn btn-outline-success">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#07f223" }}
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToDoList;
