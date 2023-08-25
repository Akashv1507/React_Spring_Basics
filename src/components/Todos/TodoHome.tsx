import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import React, { useState } from "react";
import ITodos from "../interfaces/Todos";
import EditTodosModel from "../UI/EditTodosModel";

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
      <TodoList todos={todos} tblId="todoListTbl"></TodoList>
      <EditTodosModel todosText="hi" todoDate="2023-08-23" onConfirm={()=>{}}></EditTodosModel>
      
    </>
  );
};

export default TodoHome;
