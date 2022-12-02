import React, { useRef, useContext } from "react";
import GlobalContext from "../store/GlobalContext";

function Delta() {
  const nameRef = useRef();
  const { state, dispatch } = useContext(GlobalContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "CHANGENAME", payload: nameRef.current.value });
  };
  return (
    <div>
      <h1>Delta</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} />
        <button>Change Name</button>
      </form>
    </div>
  );
}

export default Delta;
