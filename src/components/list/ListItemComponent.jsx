import "./ListItemComponent.scss";
import { useState } from "react";

function ListItemComponent({ todo, deleteTodo, onEdit, onTodoCheck }) {
  const [isChecked, setIsChecked] = useState(todo.isCompleted === "complete");

  const onItemClick = (todo) => {
    setIsChecked(todo.isCompleted);
    todo.isCompleted = !todo.isCompleted;
    onTodoCheck(todo);
  };

  return (
    <li className="list-item" key={todo.id}>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          id={`todo-${todo.id}`}
          defaultChecked={isChecked}
        />
        <label htmlFor={`todo-${todo.id}`} onClick={onItemClick}></label>
      </div>
      <label
        className="todo-title"
        htmlFor={`todo-${todo.id}`}
        onClick={() => {
          onItemClick(todo);
        }}
      >
        {todo.title}
      </label>

      <div className="btn-wrapper">
        <button
          onClick={() => {
            onEdit(todo);
          }}
        >
          <img src="/images/pen.svg" alt="Edit" />
        </button>
        <button onClick={() => deleteTodo(todo.id)} type="button">
          <img src="/images/bin.svg" alt="Delete" />
        </button>
      </div>
    </li>
  );
}

export default ListItemComponent;
