import classes from "./TodoItem.module.css";

interface ITodoListProps {
  children?: React.ReactNode;
  todoText: string;
  onRemoveTodo: () => void;
}

const TodoItem: React.FC<ITodoListProps> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.todoText}
    </li>
  );
};

export default TodoItem;
