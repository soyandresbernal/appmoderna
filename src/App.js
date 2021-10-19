import React, { useState } from "react";
import { isEmpty } from "lodash";
function App() {
  const [task, setTask] = useState("");
  const addTask = (e) => {
    e.preventDefault();
    if (isEmpty(task)) {
      console.log("task is empty");
      return;
    }
    console.log("ok");
    setTask("");
  };
  return (
    <div className="container mt-5">
      <h1>App</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Todo list</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="lead">Name of task</span>
              <buton className="btn btn-danger btn-sm float-right mx-2">
                remove
              </buton>
              <buton className="btn btn-warning btn-sm float-right">
                edit
              </buton>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Form</h4>
          <form onSubmit={addTask}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="task....."
              onChange={(text) =>
                setTask(text.target.value)
              }
              value={task}
            ></input>
            <button
              className="btn btn-dark btn-block"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
