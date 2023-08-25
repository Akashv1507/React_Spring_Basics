import { useMemo, useRef } from "react";
import ITodos from "../interfaces/Todos";
import "./TodoList.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
//import $ from "jquery";
const $ = require('jquery')
$.DataTable = require('datatables.net')
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
      {
        data: null,
        className: 'dt-center editor-edit',
        defaultContent: 'Edit',
        orderable: false
    },
    {
        data: null,
        className: 'dt-center editor-delete',
        defaultContent: 'delete',
        orderable: false
    }
    ];
  }, []);
  
  const tableRef = useRef<HTMLTableElement>(null)

  const {todos} = props

  // destroy:true and useefeect cleanup doing the same thing, means destroyinh the table before next row addition 
  const table = $(tableRef.current).DataTable({
    data:todos,
    dom: "Brtip",
    columns: cols,
    destroy:true
  });

  // useEffect(() => {
  //   console.log("datatables created");
  //   const table = $(tableRef.current).DataTable({
  //     data:todos,
  //     dom: "Brtip",
  //     columns: cols,
  //   });

  //   return () => {
  //     console.log("datatables destroy", table);
  //     table.destroy();
  //   };
  // }, [cols,todos ]);

  return (
    <div className="container">
      <table id ={props.tblId} className="todoListTbl" width="100%" ref={tableRef} ></table>
    </div>
  
  )
};

export default TodoList;
