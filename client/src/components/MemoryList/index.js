import React, { useEffect } from "react";
import { ListItem, List } from "../List";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_MEMORY, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import SearchMemory from "../SearchMemory";

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
        <h3>List of All Memories</h3>
        <SearchMemory/>
        {state.memory.length ? (
            <List>
                {state.memory.map(memory => (
                    <ListItem key={memory._id}>
                        <strong>
                            {memory.date + ": " + memory.main_content}
                        </strong>
                        {" " + memory.tag }
                    </ListItem>
                ))}
            </List>
        ) : (
            <h4>Add some memories!</h4>
        )}
    </div>
);
}

export default MemoryList;



// {state.memory.map(memory => {
//     if(memory.tag.split(', ').indexOf('Sad') > -1) {
//    return (
//     <ListItem key={memory._id}>
//         <strong>
//             {memory._id + memory.main_content}
//         </strong>
//         {memory.tag}
//     </ListItem>