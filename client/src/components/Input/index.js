import React from "react";

function Input(props) {
    return (
        <div className="form-group mt-3 mb-3">
            <input className="form-control" type="text" onChange={props.onchange} placeholder="Search by Tag" />
        </div>
    );
}

export default Input