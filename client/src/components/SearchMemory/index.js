import React, { useState } from "react";
import API from "../../utils/API";
import { ListItem, List } from "../List";
import Input from "../Input";
import Button from "../Button";
import MemoryList from "../MemoryList";


function SearchMemory() {

    const [memories, setMemories] = useState([]);
    const [memorySearch, setMemorySearch] = useState("");

    const handleInputChange = event => {
        const { value } = event.target;
        setMemorySearch(value);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        API.getMemory(memorySearch)
            .then(res => { 
                console.log(res.data);
                const feeling = res.data.filter(mood => {
                    console.log(mood.tag);
                   return mood.tag == "Scary";
                
                })
                console.log(feeling);
                setMemories(feeling);
                // useState = {setMemories}
                
            })
            .catch(err => console.log(err));
    };
    return (
        <div>
                        <Input
                            name="MemorySearch"
                            value={memorySearch}
                            onchange={handleInputChange}
                            placeholder="Search for a Memory" />
                        <Button
                            onClick={handleFormSubmit}
                            type="success"
                            className="btn btn-info mt-2 mb-5">Search</Button>


        </div>
    );
}

export default SearchMemory;





{/* <List>
{state.setMemory.map(memory => {
if(memory.toString().split(", ").indexOf("Scary") > -1) {
return (
<ListItem key={memory.id}>
 <strong>
     {memory._id + ": " + memory.main_content}
 </strong>
 {" " + memory.tag}
</ListItem>
)
}
})}
</List> */}
