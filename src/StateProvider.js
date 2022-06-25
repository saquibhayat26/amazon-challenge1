// import React, { createContext, useContext, useReducer } from "react";
// // import reducer, { initialState } from "./reducer";

// //prepares the datalayer
// export const StateContext = createContext();

// //wrap our app and provide the data layer to every component of our app
// export const StateProvider = ({ reducer, initialState, Children }) => (
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {Children}
//   </StateContext.Provider>
// );

// // pull the information from data layer
// export const useStateValue = () => useContext(StateContext);

import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
