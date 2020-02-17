import React, { createContext, useReducer, useContext } from "react";
import {
    UPDATE_USER,
    ADD_USER,
    ADD_MEMORY,
    UPDATE_MEMORY,
    LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
    case UPDATE_USER:
        return {
            ...state,
            user: [...action.user],
            loading: false
        };
    case ADD_USER:
        return {
            ...state,
            user: [...action.user, ...state.user],
            loading: false
        };

    case ADD_MEMORY:
        return {
            ...state,
            memory: [...action.memory, ...state.memory],
            loading: false
        };

    case UPDATE_MEMORY:
        return {
            ...state,
            memory: [...action.memory],
            loading: false
        };

    case LOADING:
        return {
            ...state,
            loading: true
        };

    default:
        return state;
    }
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        memory: [],
        currentMemory: {
            _id: 0,
            body: "",
            loading: false
        }
        });

return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };