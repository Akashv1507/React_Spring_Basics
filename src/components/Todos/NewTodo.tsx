import classes from "./NewTodo.module.css";
import React, { useState, useRef, useContext } from "react";
import Imsg from "../interfaces/ErrorMsg";
import MsgModal from "../UI/MsgModal";
import { useAlert } from "react-alert";
import ITodos from "../interfaces/Todos";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

interface INewTodoProps {
  children?: React.ReactNode;
  onAddTodo: (totod: ITodos) => void;
}
const NewTodo: React.FC<INewTodoProps> = (props) => {
  const [error, setError] = useState<Imsg | null>(null);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todoDateInputRef = useRef<HTMLInputElement>(null);
  const alert = useAlert();

  const addTodoHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    const enteredTodoText = todoTextInputRef.current!.value;
    const enteredTodoDate = todoDateInputRef.current!.value;

    if (enteredTodoText.trim().length < 6) {
      setError({
        title: "Todo Text Error",
        message: "Entered Text should be atleast 6 character long.",
      });
      return;
    }
    if (enteredTodoDate === "") {
      setError({
        title: "Date Error",
        message: "Please Enter Date.",
      });
      return;
    }
    props.onAddTodo({
      id: Math.random() * 100,
      todoText: enteredTodoText,
      todoDate: enteredTodoDate,
      isDone: false,
    });
    alert.show("Todo Added Successfully", {
      type: "success",
    });
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {/* to hold error of this page */}
      {error && (
        <MsgModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className="p-1 h1 text-primary text-center mx-auto mt-5 display-inline-block">
      <FontAwesomeIcon icon={faCheckSquare } />
        <u>My Todo-s</u>
      </div>
      <div className={classes.container}>
        <form>
          <div className={classes.group}>
            <input type="text" required ref={todoTextInputRef} />
            <span className={classes.highlight}></span>
            <span className={classes.bar}></span>
            <label>Todo</label>
          </div>

          <div className={classes.group}>
            <input type="date" required ref={todoDateInputRef} />
            <span className={classes.highlight}></span>
            <span className={classes.bar}></span>
            <label></label>
          </div>
          <div className={classes.group}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={addTodoHandler}
            >
              Add Todo
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewTodo;