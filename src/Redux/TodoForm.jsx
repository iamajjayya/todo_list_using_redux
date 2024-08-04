import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./TodoSlice";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim()) {
        dispatch(addTodo(text));
        setText("");
    }

  }

  return (
    <>
      
      <form onClick={handleSubmit}>
      <h1>Todo List </h1>
      <input
        type="text"
        value={text}
        placeholder="Add a new Todo"
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add todo</button>
      </form>
     
    </>
  );
};

export default TodoForm;
