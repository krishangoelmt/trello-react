import React, {createContext, useReducer} from "react";

import { trelloReducer, initialTrelloState } from "./reducers"

const Store = ({children}) => {
    const [state, dispatch] = useReducer(trelloReducer, initialTrelloState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialTrelloState);
export default Store;

  