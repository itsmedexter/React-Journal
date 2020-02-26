import React, { createContext, useReducer, useContext } from "react";
import {
    UPDATE_USER,
    ADD_USER,
    GET_USER,
    ADD_MEMORY,
    UPDATE_MEMORY,
    LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
    case ADD_MEMORY:
        return {
            ...state,
            memory: [...state.memory, action.post],
            loading: false
        };

    case UPDATE_MEMORY:
        return {
            ...state,
            memory: [...action.memory],
            loading: false
        };
// added for login page
    case GET_USER:
        return {
            ...state,
            user: [...action.user],
            loading: false
        };

        case UPDATE_USER:
        return {
            ...state,
            user: [...action.user],
            loading: false
        };
    case ADD_USER:
        return {
            ...state,
            user: [...action.post, ...state.user],
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