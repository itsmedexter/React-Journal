import React, { useRef, useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_MEMORY, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import "./index.css";

const tagsConfigInitialState = [{value: false, name: 'happy', label:'Happy'}, {value: false, name: 'funny', label:'Funny'}, {value: false, name: 'silly', label:'Silly'}, {value: false, name: 'terrible', label:'Terrible'}, {value: false, name: 'scary', label:'Scary'}]

function CreateMemoryForm({userId}) {
    const [tagsConfig, setTagsConfig] = useState(tagsConfigInitialState);
    const bodyRef = useRef();
    const [state, dispatch] = useStoreContext();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: LOADING });
        const {value: main_content} = bodyRef.current;
        const tag = tagsConfig.filter(tag => {
            return tag.value;
        })
        .map(tag => tag.label).join(', ');
        console.log(main_content);
        console.log(tag);
        console.log(userId);
        API.saveMemory({
            main_content,
            tag,
            userId
                })
        .then(result => {
            console.log(result)
            dispatch({
                type:ADD_MEMORY,
                post: result.data
            });
        })
        .catch(err => console.log(err));

        bodyRef.current.value = "";
    };

    const onCheckboxChange = event => {
        console.log(event.target.name);
        const replaceIdx = tagsConfig.findIndex(tag => tag.name === event.target.name);
        const newData = [...tagsConfig];
        if(replaceIdx !== -1) {
            newData[replaceIdx].value = !newData[replaceIdx].value;
            setTagsConfig(newData);
        }
    }

    return (
        <div>
            <h3>Jot down a memory!</h3>
            <form className="form-group mt-3 mb-3" onSubmit={handleSubmit}>
                <textarea className="form-control mb-2" required ref={bodyRef} placeholder="50 Characters or Less" rows="3" />
                <div className="tag-container checkBox">
                    <h4>Add a Tag</h4>
                    {tagsConfig.map(tag => {
                        return (
                            <>
                        <input type="checkbox" onChange={onCheckboxChange} id={tag.name} name={tag.name} checked={tag.value} />
                        <label htmlFor={tag.name}>{tag.label}</label>
                            </>
                        )
                    })}
                </div>
                <button className="btn btn-info mt-2 mb-5" disabled={state.loading} type="submit">Save Memory</button>
            </form>
        </div>
    );
}

export default CreateMemoryForm;