import "./App.scss";

import { useEffect, useState } from "react";

import SearchComponent from "./components/search/SearchComponent";
import ListItemComponent from "./components/list/ListItemComponent";
import TodoForm from "./components/todo-form/TodoForm";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Todo 1", status: "complete" },
    { id: 2, title: "Todo 2", status: "complete" },
    { id: 3, title: "Todo 3", status: "incomplete" },
    { id: 4, title: "Todo 4", status: "incomplete" },
    { id: 5, title: "Todo 5", status: "incomplete" },
  ]);
  const [todoListToShow, setTodoListToShow] = useState(todoList);
  const [isAddPopupOpen, setIsTodoPopupOpen] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState();

  useEffect(() => {
    setTodoListToShow(todoList);
  }, [todoList]);

  const openPopup = (todo) => {
    if (todo) {
      setTodoToEdit(todo);
    }
    setIsTodoPopupOpen(!isAddPopupOpen);
  };

  const closePopup = () => {
    setIsTodoPopupOpen(false);
  };

  const handleSubmit = (oldTodo, newTodo) => {
    if (oldTodo.id) {
      // edit
      setTodoList((prev) =>
        prev.map((todo) =>
          todo.id === oldTodo.id
            ? { id: oldTodo.id, title: newTodo, status: oldTodo.status }
            : todo
        )
      );
    } else {
      // add
      const lastId = todoList.length ? todoList[todoList.length - 1].id : 0;
      const tempTodo = {
        id: lastId + 1,
        title: newTodo,
        status: "incomplete",
      };
      setTodoList((prev) => [...prev, tempTodo]);
    }
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const onSearch = (value) => {
    setTodoListToShow(
      todoList.filter((todo) =>
        todo.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const onFilter = (value) => {
    if (value === "all") {
      setTodoListToShow(todoList);
      return;
    }

    setTodoListToShow(todoList.filter((todo) => todo.status === value));
  };

  return (
    <>
      <h1 className="main-title">TODO LIST</h1>

      <SearchComponent onSearch={onSearch} onFilter={onFilter} />

      <ul className="list-wrapper">
        {todoListToShow.map((todo) => (
          <ListItemComponent
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            onEdit={openPopup}
          />
        ))}
      </ul>
      {todoListToShow.length === 0 && (
        <div className="empty-list">
          <span>Empty...</span>
        </div>
      )}

      <button className="add-btn" type="button" onClick={openPopup}>
        <img src="/public/images/plus.png" alt="Add" />
      </button>

      {isAddPopupOpen && (
        <TodoForm
          closePopup={closePopup}
          handleSubmit={handleSubmit}
          todoToEdit={todoToEdit}
        />
      )}
    </>
  );
}

export default App;
