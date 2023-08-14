import ITodos from "../interfaces/Todos";
import classes from "./TodoList.module.css";
import TodoItem from "./TodoItem";
import { useEffect, useRef } from "react";

interface ITodoListProps {
  children?: React.ReactNode;
  todos: ITodos[];
}

const TodoList: React.FC<ITodoListProps> = (props) => {
  const tblRef = useRef<HTMLTableElement>()

  return (
    // <ul className={classes.todos}>
    //   {props.todos.map((todo) => (
    //     <TodoItem
    //       key={todo.id}
    //       todoText={todo.todoText}
    //       onRemoveTodo={() => {}}
    //     />
    //   ))}
    // </ul>
    // Create a reference for the table
  <table ref={tblRef}></table>
  );
};

export default TodoList;
