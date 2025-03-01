import { useContext } from "react";
import { TodoItemsContext } from "../store/todo_Items_Store";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return todoItems.length === 0 && <h1>No Todo's Today</h1>;
};

export default WelcomeMessage;
