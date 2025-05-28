import { useEffect, useState } from "react";
import "./TodoForm.scss";

function TodoForm({ closePopup, handleSubmit, todoToEdit }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (todoToEdit?.title !== undefined) {
      setInputValue(todoToEdit.title);
    }
  }, [todoToEdit]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    handleSubmit(todoToEdit, inputValue);
    closePopup();
  };

  return (
    <>
      <div className="form-wrapper">
        <div className="background" onClick={closePopup}></div>
        <form onSubmit={onSubmit}>
          <h1>NEW NOTE</h1>

          <input
            type="text"
            placeholder="Input your note..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <div className="btn-wrapper">
            <button onClick={closePopup} type="button">
              CANCEL
            </button>
            <button type="submit">APPLY</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default TodoForm;
