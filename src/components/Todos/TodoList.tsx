import { useMemo } from "react";
import ITodos from "../interfaces/Todos";
import "./TodoList.css";
import { useEffect } from "react";
import $ from "jquery";

require("datatables.net-bs4/css/dataTables.bootstrap4.min.css");
require("datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css");

require("datatables.net"); // eslint-disable-line no-unused-vars
require("jszip/dist/jszip.min.js");
require("datatables.net-bs4/js/dataTables.bootstrap4.min.js");
require("datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js"); // Column visibility
require("datatables.net-buttons/js/buttons.colVis.min.js"); // Column visibility
require("datatables.net-buttons/js/buttons.flash.min.js"); // Flash file export
require("datatables.net-buttons/js/buttons.html5.min.js"); // HTML 5 file export
require("datatables.net-buttons/js/buttons.print.min.js"); // Print view button

interface ITodoListProps {
  children?: React.ReactNode;
  todos: ITodos[];
  tblId: string;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
  const cols = useMemo(() => {
    return [
      { title: "Description", data: "todoText" },
      { title: "Date", data: "todoDate" },
      { title: "IsDone", data: "isDone" },
    ];
  }, []);

  useEffect(() => {
    console.log("datatables created");
    const dt = $(`#${props.tblId}`).DataTable({
      data: props.todos,
      dom: "Brtip",
      columns: cols,
      lengthMenu: [96, 192, 188],
    });

    return () => {
      console.log("datatables destroy", dt);
      dt.destroy();
    };
  }, [props.tblId, cols, props.todos]);

  return <table id={props.tblId} style={{ width: "500px" }}></table>;
};

export default TodoList;
