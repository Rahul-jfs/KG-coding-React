import { useContext, useRef } from "react";
import { TodoItemsContext } from "../store/todo_Items_Store";

function AddTodo() {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const contextObject = useContext(TodoItemsContext);
  const { addItem } = contextObject;

  const addBtnClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    addItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={addBtnClick}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
