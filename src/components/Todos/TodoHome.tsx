import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import React, { useState } from "react";
import ITodos from "../interfaces/Todos";

const TodoHome: React.FC = () => {
  const [todos, setTodos] = useState<ITodos[]>([]);
  const addTodoHandler = (todo: ITodos) => {
    setTodos((currTodos) => {
      return [todo, ...currTodos];
    });
  };
  return (
    <>
      <NewTodo onAddTodo={addTodoHandler}></NewTodo>
      <TodoList todos={todos}></TodoList>
    </>
  );
};

export default TodoHome;
