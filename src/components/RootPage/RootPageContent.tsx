import classes from "./RootPageContent.module.css";
import TodoHome from "../Todos/TodoHome";


const RootPageContent:React.FC = () => {
  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
      <TodoHome></TodoHome>
    </section>
  );
};

export default RootPageContent;
