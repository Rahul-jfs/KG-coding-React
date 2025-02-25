import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, handleDeleteButton }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, i) => (
        <TodoItem
          key={i}
          todoName={item.name}
          todoDate={item.dueDate}
          handleDeleteButton={handleDeleteButton}
        />
      ))}
    </div>
  );
};

export default TodoItems;
