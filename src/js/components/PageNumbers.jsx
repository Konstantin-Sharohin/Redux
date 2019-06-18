import React from "react";

const pageNumbersStyle = {
    marginRight: "1em",
    fontSize: "1.2em",
    color: "orange",
    userSelect: "none",
    cursor: "pointer"
},
    pageNumbersStyleActive = {
        marginRight: "1em",
        fontSize: "1.2em",
        color: "grey",
        userSelect: "none",
        cursor: "pointer"
    }


const PageNumbers = (props) =>
    <ul id="page-numbers" style={{ listStyle: "none", display: "flex" }}>
        {props.pages.map(number => {
            let currentStyle = props.currentPage === number ? pageNumbersStyleActive : pageNumbersStyle;
            //if (number === 1 || number === props.pages.length || (number >= props.currentPage - 2 && number <= props.currentPage + 2)) {
            return (
                <li style={currentStyle}
                    key={number}
                    id={number}
                    onClick={props.selectPage}
                >
                    {number}
                </li>
            )
        }
        )}
    </ul>;


export default PageNumbers;



