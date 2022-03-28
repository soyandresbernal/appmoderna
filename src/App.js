//todo:module20

import React, { useState, useEffect } from "react";
import { isEmpty, size } from "lodash";
import shortid from "shortid";
import { getCollection } from "./actions";
function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [id, setId] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await getCollection("task");
      console.log(result);
    })();
  }, []);

  const validForm = () => {
    let isValid = true;
    setError(null);
    if (isEmpty(task)) {
      setError("Ingresar un tarea");
      isValid = false;
    }
    return isValid;
  };
  //validacion del campo y campo en blanco
  //creacion de nuevas tareas

  const addTask = (e) => {
    e.preventDefault();
    if (isEmpty(task)) {
      return;
    }
    const newTask = {
      id: shortid.generate(),
      name: task,
    };
    setTasks([...tasks, newTask]);
    setTask("");
  };

  const saveTask = (e) => {
    e.preventDefault();
    if (!validForm()) {
      return;
    }
    const editedTasks = tasks.map((item) =>
      item.id === id ? { id, name: task } : item
    );
    setTasks(editedTasks);
    setEditMode(false);
    setTask("");
    setId("");
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(
      (task) => task.id !== id
    );
    setTasks(filteredTasks);
  };

  const editTask = (theTask) => {
    setTask(theTask.name);
    setEditMode(true);
    setId(theTask.id);
  };

  return (
    <div className="container mt-5">
      <h1>App</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Todo list</h4>

          {size(tasks) === 0 ? (
            <li className="list-group-item">
              NO hay tareas
            </li>
          ) : (
            <ul className="list-group">
              {tasks.map((task) => (
                <li
                  className="list-group-item"
                  key={task.id}
                >
                  <span className="lead">{task.name}</span>
                  <button
                    className="btn btn-danger btn-sm float-right mx-2"
                    onClick={() => deleteTask(task.id)}
                  >
                    Eliminar
                  </button>
                  <button
                    className="btn btn-warning btn-sm float-right"
                    onClick={() => editTask(task)}
                  >
                    Editar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {editMode ? "modify task" : "add task"}
          </h4>
          <form onSubmit={editMode ? saveTask : addTask}>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="task....."
              onChange={(text) =>
                setTask(text.target.value)
              }
              value={task}
            ></input>
            {error && (
              <span className="text-danger">{error}</span>
            )}
            <button
              className={
                editMode
                  ? "btn btn-warning btn-block"
                  : " btn btn-dark btn-block"
              }
              type="submit"
            >
              {editMode ? "Save" : "Add"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
