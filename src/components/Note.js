import React from "react";

function Note(props) {
  return (
    <div className="bg-red-300 w-1/4 py-2 px-4 m-3 rounded-lg">
      <h1 className="text-2xl py-2 ">{props.title}</h1>
      <p className="my-2">{props.note}</p>
      <div className="text-end">
        <button
          className="bg-white px-2 py-1 mt-2 rounded-md"
          onClick={props.onDelete}
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default Note;
