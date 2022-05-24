import React, { useState } from "react";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todoItem, setTodoItem] = useState<Todo[]>([]);

  const todoAddHandler = (todoText: string) => {
    setTodoItem((prevTodo) => [
      ...prevTodo,
      { id: Math.random().toString(), text: todoText },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodoItem((prevTodoItem) => {
      return prevTodoItem.filter((todo: Todo) => todo.id !== todoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todoItem} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
