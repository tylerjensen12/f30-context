import { createContext, useReducer, useState } from "react";

const GlobalContext = createContext();

let initialState = {
  name: "Tyler",
  age: 0,
  isCool: false,
};

const GlobalContextProvider = (props) => {
  //   const [name, setName] = useState("Tyler");

  //   return (
  //     <GlobalContext.Provider value={{ name, setName }}>
  //       {props.children}
  //     </GlobalContext.Provider>
  //   );

  const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGENAME":
        return {...state, name: action.payload}
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalContext;
export { GlobalContextProvider };
