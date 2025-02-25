import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  const initialTodoItems = [
    { name: "Buy Milk", dueDate: "4/12/2024" },
    { name: "Gym", dueDate: "4/12/2024" },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleAddButton = (todoName, dueDate) => {
    const newItem = { name: todoName, dueDate };
    setTodoItems([...todoItems, newItem]);
  };

  const handleDeleteButton = (todoName) => {
    const newList = todoItems.filter((item) => item.name != todoName);
    setTodoItems(newList);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleAddButton={handleAddButton} />
      {todoItems.length == 0 ? (
        <h1>No Todo's Today</h1>
      ) : (
        <TodoItems
          todoItems={todoItems}
          handleDeleteButton={handleDeleteButton}
        />
      )}
    </center>
  );
}

export default App;
