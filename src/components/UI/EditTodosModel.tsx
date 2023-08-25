import React, { useState, useRef } from "react"; import ReactDOM from "react-dom";
import Card from "./Card";
import classes from "./EditTodosModel.module.css";
import Imsg from "../interfaces/ErrorMsg";
import MsgModal from "../UI/MsgModal";

//createPortal needs div and jsx element... it moves rendered html content to somewhere else..
//here top of root, irrespective of where modal is used

export interface IEditTodosModal {
    todosText: string;
    todoDate: string;
    onConfirm: () => void;
}

const Backdrop: React.FC<{ onConfirm: () => void }> = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

//use of portal
const ModalOverlay: React.FC<IEditTodosModal> = (props) => {
    const [error, setError] = useState<Imsg | null>(null);
    const [todoTextInput, setTodoText] = useState<string>(props.todosText);
    const [todoDateInput, setTodoDate] = useState<string>(props.todoDate);

    const textChangeHandler = (event: React.ChangeEvent) => {
        setTodoText((event.target as HTMLInputElement).value)
    }
    const dateChangeHandler = (event: React.ChangeEvent) => {
        setTodoDate((event.target as HTMLInputElement).value)
    }

    const addTodoHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        if (todoTextInput.trim().length < 6) {
            setError({
                title: "Todo Text Error",
                message: "Entered Text should be atleast 6 character long.",
            });
            return;
        }
        if (todoDateInput === "") {
            setError({
                title: "Date Error",
                message: "Please Enter Date.",
            });
           
            
        }
        setError(null);
    };

    const errorHandler = () => {
        setError(null);
    };


    return (
        <>
            
            <Card className={classes.modal}>
                <form>
                    <div className={classes.group}>
                        <input type="text" required value={todoTextInput} onChange={textChangeHandler} />
                        <span className={classes.highlight}></span>
                        <span className={classes.bar}></span>
                        <label>Todo</label>
                    </div>

                    <div className={classes.group}>
                        <input type="date" required value={todoDateInput} onChange={dateChangeHandler}/>
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
                    <div className={classes.group}>
                        {error && <>Please enter valid details</>}
                    </div>
                </form>
            </Card>
        </>
    );
};

const EditTodosModel: React.FC<IEditTodosModal> = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById("backdrop-edit") as HTMLDivElement
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    todosText={props.todosText}
                    todoDate={props.todoDate}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById("overlay-edit") as HTMLDivElement
            )}
        </React.Fragment>
    );
};

export default EditTodosModel;