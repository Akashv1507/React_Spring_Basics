import NewTodo from "./NewTodo"
import TodoList from "./TodoList"
const TodoHome: React.FC = ()=>{
    return(
        <>
            <NewTodo></NewTodo>
            <TodoList></TodoList>
        </>
    )
}

export default TodoHome