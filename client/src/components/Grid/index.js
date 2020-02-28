import React from 'react';

// Container uses bootstrap container without worrying about class names
export function Container({ fluid, children }) {
    return <div className={`rows${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without class names
export function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This col component size boostrap columns with less syntax
// Sample <col size="md-12">
export function Col({ size, children }) {
    return (
        <div
        className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
        {children}
        </div>
    );
}
