import React from "react";
import { MdDeleteForever } from "react-icons/md";

function Note(props) {
  function handleClick(){
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="del" onClick={handleClick}><MdDeleteForever /></button>
    </div>
  );
}

export default Note;
