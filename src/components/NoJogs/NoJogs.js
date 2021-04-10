import logo from "./sad-emoticon.svg";
import React, { useState } from "react";
import "./NoJogs.scss";
import Form from "../Form/Form";

function NoJogs() {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="noJogs">
      {!isAdding && (
        <>
          <img src={logo} className="sadEmoticon" />
          <p>Nothing is there</p>
          <button onClick={() => setIsAdding(true)} className="addNewJog">
            Create your jog first
          </button>
        </>
      )}
      {isAdding && <Form onClose={setIsAdding} />}
    </div>
  );
}

export default NoJogs;
