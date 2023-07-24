import React, { useState } from "react";

function MakeNote(props) {
  const [expand, setExpand] = useState(false);
  const [placeholder, setPlaceholder] = useState("Take a note...");

  const showMakeNote = () => {
    setExpand(true);
    setPlaceholder("Title...");
  };

  const formBlurHandler = (e) => {
    const { relatedTarget } = e;
    if (relatedTarget) {
      return;
    } else {
      props.hideFunction(setExpand, setPlaceholder);
    }
  };

  return (
    <div className="text-center py-5">
      <form
        onBlur={formBlurHandler}
        action=""
        onSubmit={props.submitEvent}
        className="p-4 w-2/6 mx-auto rounded-lg flex flex-col shadow-lg relative"
      >
        <input
          type="text"
          value={props.titleValue}
          onChange={props.inpOnChange}
          placeholder={placeholder}
          onFocus={showMakeNote}
          // onBlur={() => {
          //   props.hideFunction(setExpand, setPlaceholder);
          // }}
          autoComplete="off"
          className="px-4 py-2 font-medium rounded-lg bg-yellow-100 outline-none text-xl"
        />
        {expand ? (
          <textarea
            value={props.textareaValue}
            onChange={props.texOnChange}
            placeholder="Write a note..."
            cols="30"
            rows="5"
            className="mt-4 resize-none rounded-lg bg-yellow-50 px-4 py-2 outline-none"
          ></textarea>
        ) : null}
        <div id="btnContainer" className="text-end">
          {/* <button
            type="submit"
            className="bg-blue-600 rounded-md text-white py-2 px-4 absolute top-full left-[82%]"
          >
            submit
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default MakeNote;
