import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import TodoItemsContext from "./store/todo_Items_Store";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addItem = (todoName, dueDate) => {
    const newItem = { name: todoName, dueDate };
    setTodoItems([...todoItems, newItem]);
  };

  const deleteItem = (todoName) => {
    const newList = todoItems.filter((item) => item.name != todoName);
    setTodoItems(newList);
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, addItem, deleteItem }}>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
