import React, {useContext} from "react";
import GlobalContext from "../store/GlobalContext";

function Charlie() {
    const {state, dispatch} = useContext
    (GlobalContext)
  return (
    <div>
      <h3>{state.name}</h3>
    </div>
  );
}

export default Charlie;
