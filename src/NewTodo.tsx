import React, { useRef } from "react";
import "./NewTodo.css";

interface NewTodoPros {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoPros> = (props) => {
  const todoTextInput = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTodoText = todoTextInput.current!.value;
    props.onAddTodo(enteredTodoText);
    console.log(enteredTodoText);
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={todoTextInput} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
