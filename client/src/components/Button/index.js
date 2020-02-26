import React from "react";

function Button({ type = "default", className, children, onClick }) {
    return (
        <button onClick={onClick} className={["btn btn-info mt-2 mb-5 tagbtn", `btn-${type}`, className].join(" ")}> {children}
        </button>
    );
}

// make api call on button for onclick 

export default Button;


