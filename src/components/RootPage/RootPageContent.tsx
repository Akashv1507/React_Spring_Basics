import classes from "./RootPageContent.module.css";
import { Link } from "react-router-dom";

const RootPageContent: React.FC = () => {
  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
      <Link to="todos"> Manage Your Todos</Link>
    </section>
  );
};

export default RootPageContent;
