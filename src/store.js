import {createContext} from "react";

export const AppContext = createContext(null);
export const initialState = {}
export const appReducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_GLOBAL_STATE":
            return {
                ...state,
                currentGlobalState: action.currentGlobalState
            };
        default:
            throw new Error(`Whoops, can't handle action: ${action.type}`);
    }
};
