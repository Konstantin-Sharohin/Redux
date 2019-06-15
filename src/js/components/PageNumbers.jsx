import React from "react";

const pageNumbers = [];
for (let i = 1; i <= 7; i++) {
    pageNumbers.push(i);
};

export const RenderPageNumbers = (props) =>
    pageNumbers.map(number => {
    return (
        <li style={{ marginRight: "1em", fontSize: "1.2em", color: "orange", userSelect: "none", cursor: "pointer" }}
            key={number}
            id={number}
            onClick={props.state}
        >
            {number}
        </li>
    )
});


    
