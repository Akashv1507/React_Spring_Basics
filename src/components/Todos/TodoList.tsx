import ITodos from "../interfaces/Todos";
import classes from "./TodoList.module.css";
import { useEffect } from "react";
import $ from "jquery";
import { Table } from "react-bootstrap";

import 'datatables.net'; // eslint-disable-line no-unused-vars
import'jszip/dist/jszip.min.js'
import'datatables.net-bs4/js/dataTables.bootstrap4.min.js'
import'datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js'; // Column visibility
//import'datatables.net-buttons/js/buttons.flash.min.js';  // Flash file export
import "datatables.net-buttons/js/buttons.flash"
//import'datatables.net-buttons/js/buttons.html5.min.js';  // HTML 5 file export
import "datatables.net-buttons/js/buttons.html5.min.mjs"
//import'datatables.net-buttons/js/buttons.print.min.js';  // Print view button
import "datatables.net-buttons/js/buttons.print.min.mjs"
import "pdfmake/build/pdfmake"
import "pdfmake/build/vfs_fonts"
// Import necessary styles
import "datatables.net-dt/css/jquery.dataTables.min.css";
//import "dataTables.bootstrap4.min.css'"


interface ITodoListProps {
  children?: React.ReactNode;
  todos: ITodos[];
  tblId: string
}

const TodoList: React.FC<ITodoListProps> = (props) => {

  const cols = [{ title: 'Description', data: "todoText" }, { title: 'Date', data: "todoDate" }, { title: 'IsDone', data: "isDone" }]

  useEffect(() => {
    const dt = $(`#${props.tblId}`).DataTable({

  
      data: props.todos,
      dom: "Bfrtip",
      columns: cols,
      lengthMenu: [96, 192, 188],
      
    });

    return () => {
      console.log('datatables destroy', dt);
      dt.destroy();
    }
  }, [props.tblId, cols, props.todos]
  );


  return (
    <Table id={props.tblId}
      borderless
      striped
      hover
      responsive
      className="container"
      size={"md"}
    >
    </Table>
  )
};

export default TodoList;
