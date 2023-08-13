import ITodos from "../interfaces/Todos";
import classes from "./TodoList.module.css";
import TodoItem from "./TodoItem";

interface ITodoListProps {
  children?: React.ReactNode;
  todos: ITodos[];
}

const TodoList: React.FC<ITodoListProps> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todoText={todo.todoText}
          onRemoveTodo={() => {}}
        />
      ))}
    </ul>
  );
};

export default TodoList;
