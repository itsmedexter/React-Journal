import React, { useEffect, useState } from "react";
import { ListItem, List } from "../List";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_MEMORY, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import SearchMemory from "../SearchMemory";
import moment from "moment";

function MemoryList() {
    const [state, dispatch] = useStoreContext();
    const [filterText, setFilterText] = useState('');
    const getMemory = () => {
        dispatch({ type: LOADING });
        API.getMemory()
        .then(results => {
            console.log(results.data)
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

    const currentDate = moment().format("MMMM Do YYYY");
    let memoriesToShow = state.memory.sort((a,b) => {
        if(moment(a.date).isBefore(moment(b.date))){
            return 1;
        }

        if(moment(a.date).isAfter(moment(b.date))){
            return -1;
        }

        return 0;
    });

    if(filterText.length > 0) {
        memoriesToShow = memoriesToShow.filter(memory => {
            if(memory.tag === null) return false;
            const re = new RegExp(filterText.toLowerCase());
            const matchedArr = memory.tag.toLowerCase().match(re);
            return matchedArr !== null;
        });
    }
console.log(memoriesToShow);
return (
    <div>
        <h3>List of All Memories</h3>
        <SearchMemory setFilterText={setFilterText} />
        {state.data && state.data.length === 0 && <h4>Add some memories!</h4>}
        {Array.isArray(memoriesToShow) && memoriesToShow.length > 0 ? (
            <List>
                {memoriesToShow.map(memory => (
                    <ListItem key={memory._id}>
                        <strong>
                            {currentDate + ": " + memory.main_content}
                        </strong>
                        {" " + memory.tag }
                    </ListItem>
                ))}
            </List>
        ) : (
          <h4>Sorry no tags found</h4>
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