import React from "react";

function Input(props) {
    return (
        <div className="input-group input-group-lg">
            <input className="form-control" type="text" onChange={props.onchange} />
        </div>
    );
}

export default Input