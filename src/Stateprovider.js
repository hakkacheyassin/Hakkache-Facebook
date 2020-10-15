import { initializeApp } from 'firebase';

import React, {createContext,useContext,useReducer} from 'react';

export const StateContext = createContext();

export const StateProvider = ({reducer,initialeState,chlidren}) =>
(

    <StateContext.Provider value={useReducer(reducer,initialeState)}>
        {chlidren}
    </StateContext.Provider>

);
export const useStateValue = () => useContext(StateContext);


