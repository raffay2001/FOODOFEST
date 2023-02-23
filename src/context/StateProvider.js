import React, { createContext, useContext, useReducer } from "react"

// creating the context.
export const StateContext = createContext()

// defining the state provider.
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  )
}

// exporting all the info. with a custom hook.
export const useStateValue = () => useContext(StateContext)
