import React from "react";


const RenderPageNumbers = (props) => {
    return <ul id="page-numbers" style={{ listStyle: "none", display: "flex" }}>
        {props.pages.map(number => {
            return (
                <li style={{ marginRight: "1em", fontSize: "1.2em", color: "orange", userSelect: "none", cursor: "pointer" }}
                    key={number}
                    id={number}
                    onClick={props.handleClick}
                >
                    {number}
                </li>
            )
        })}
    </ul>
};


export default RenderPageNumbers;



