import React, { useEffect } from "react";
import { ListItem, List } from "../List";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_MEMORY, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function MemoryList() {
    const [state, dispatch] = useStoreContext();

    const getMemory = () => {
        dispatch({ type: LOADING });
        API.getMemory()
        .then(results => {
            dispatch({
                type: UPDATE_MEMORY,
                memory: results.data
            });
        })
        .catch(err => console.log(err));
    };

useEffect(() => {
    getMemory();
}, []);

return (
    <div>
        <h2>List of All Memories</h2>
        {state.memory.length ? (
            <List>
                {state.memory.map(memory => (
                    <ListItem key={memory._id}>
                        <strong>
                            {memory.body}
                        </strong>
                    </ListItem>
                ))}
            </List>
        ) : (
            <h4>You haven't added any memories!</h4>
        )}
    </div>
);
}

export default MemoryList;