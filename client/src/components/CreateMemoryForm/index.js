import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_MEMORY, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function CreateMemoryForm() {
    const bodyRef = useRef();
    const [state, dispatch] = useStoreContext();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: LOADING });
        API.saveMemory({
            body: bodyRef.current.value
        })
        .then(result => {
            dispatch({
                type:ADD_MEMORY,
                memory: result.data
            });
        })
        .catch(err => console.log(err));

        bodyRef.current.value = "";
    };

    return (
        <div>
            <h2>Jott down your Memory</h2>
            <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
                <textarea className="form-control mb-5" required ref={bodyRef} placeholder="Body" />
                <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit"> Save Memory</button>
            </form>
        </div>
    );
}

export default CreateMemoryForm;