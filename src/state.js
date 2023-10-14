import React, { createContext, useReducer, useContext, useState } from 'react';

const StateContext = createContext();
const initialState = { searchString: "", labelEmoji: "", language: "de", location: "Ulm/Neu-Ulm", showArticle: undefined };

export const StateProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
  
    return (
      <StateContext.Provider value={{ state, setState }}>
        {children}
      </StateContext.Provider>
    );
  };
  
  export const useStateValue = () => {
    const context = useContext(StateContext);
    if (context === undefined) {
      throw new Error('useStateValue must be used within a StateProvider');
    }
    return context;
  };