import "./TodoPage.scss";

import { useEffect, useState } from "react";

import {
  getTodos,
  addTodo as addTodoApi,
  updateTodo as updateTodoApi,
  deleteTodo as deleteTodoApi,
} from "../../api/todoApi";

import SearchComponent from "../../components/search/SearchComponent";
import ListItemComponent from "../../components/list/ListItemComponent";
import TodoForm from "../../components/todo-form/TodoForm";

function TodoPage() {
  const [todoList, setTodoList] = useState([]);
  const [todoListToShow, setTodoListToShow] = useState([]);
  const [isAddPopupOpen, setIsTodoPopupOpen] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState();

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await getTodos();
    setTodoList(res.data);
    setTodoListToShow(res.data);
  };

  const openPopup = (todo) => {
    setTodoToEdit(todo);
    setIsTodoPopupOpen(!isAddPopupOpen);
  };

  const closePopup = () => {
    setIsTodoPopupOpen(false);
    setTodoToEdit(null);
  };

  const onTodoCheck = async (todo) => {
    console.log(todo);
    await updateTodoApi(todo.id, todo);
  };

  const handleSubmit = async (oldTodo, title) => {
    if (oldTodo?.id) {
      // edit
      const updatedTodo = {
        ...oldTodo,
        title,
      };
      await updateTodoApi(oldTodo.id, updatedTodo);
    } else {
      // add
      const newTodo = {
        title,
        isCompleted: false,
      };
      await addTodoApi(newTodo);
    }

    fetchTodos();
    closePopup();
  };

  const deleteTodo = async (id) => {
    await deleteTodoApi(id);
    fetchTodos();
  };

  const onSearch = (value) => {
    const filtered = todoList.filter((todo) =>
      todo.title.toLowerCase().includes(value.toLowerCase())
    );
    setTodoListToShow(filtered);
  };

  const onFilter = (value) => {
    if (value === "all") {
      setTodoListToShow(todoList);
      return;
    } else {
      const boolVal = value === "complete";
      setTodoListToShow(
        todoList.filter((todo) => todo.isCompleted === boolVal)
      );
    }
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
            onTodoCheck={onTodoCheck}
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

export default TodoPage;
