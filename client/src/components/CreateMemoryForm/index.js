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
                post: result.data
            });
        })
        .catch(err => console.log(err));

        bodyRef.current.value = "";
    };

    return (
        <div>
            <h3>Jot down a memory!</h3>
            <form className="form-group mt-3 mb-3" onSubmit={handleSubmit}>
                <textarea className="form-control mb-2" required ref={bodyRef} placeholder="50 Characters or Less" rows="3" />
                <button className="btn btn-info mt-2 mb-5" disabled={state.loading} type="submit">Save Memory</button>
            </form>
        </div>
    );
}

export default CreateMemoryForm;