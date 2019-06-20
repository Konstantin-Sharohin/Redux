import React from "react";
import { connect } from "react-redux";
import { selectPage } from "../actions/index";
import { selectors } from "../selectors/index";


const pageNumbersStyle = {
    marginRight: "1em",
    fontSize: "1.2em",
    color: "orange",
    userSelect: "none",
    cursor: "pointer"
},

    ellipsisStyle = {
        marginRight: "1em",
        fontSize: "1.2em",
        color: "orange",
        userSelect: "none",
        cursor: ""
    },

    pageNumbersStyleActive = {
        marginRight: "1em",
        fontSize: "1.2em",
        color: "grey",
        userSelect: "none",
        cursor: "pointer"
    };

const ConnectedPageNumbers = (props) => {
    return (
        <ul id="page-numbers" style={{ listStyle: "none", display: "flex" }}>
            {props.currentPage !== 1 && <li style={pageNumbersStyle} id="1" onClick={props.selectPage}>
                First
                </li>}

           {props.currentPage !== 1 && <li style={pageNumbersStyle} id={props.currentPage - 1} onClick={props.selectPage}>
               Previous
               </li>}

               {props.currentPage !== 1 && <li style={ellipsisStyle}>
                <b>...</b>
            </li>}

            {props.pages.map(number => {
                let currentStyle = props.currentPage === number ? pageNumbersStyleActive : pageNumbersStyle;
                if ((number >= (props.currentPage - 2)) && (number <= (props.currentPage + 2))) {
                    return (
                        <li style={currentStyle}
                            key={number}
                            id={number}
                            onClick={props.selectPage}
                        >
                            <b id={number}>{number}</b>
                        </li>
                    )
                }
            })
            }

            {props.currentPage !== props.pages.length && <li style={ellipsisStyle}><b>...</b></li>}

            {props.currentPage !== props.pages.length && <li style={pageNumbersStyle} id={props.currentPage + 1} onClick={props.selectPage}>
                Next
                </li>}

            {props.currentPage !== props.pages.length && <li style={pageNumbersStyle} id={props.pages.length} onClick={props.selectPage}>Last</li>}
        </ul>
    )
};


const mapStateToProps = state => ({
    currentPage: selectors.getCurrentPage(state),
    pages: selectors.getPages(state)
});

const mapDispatchToProps = dispatch => ({
    selectPage: event => dispatch(selectPage(event)),
});

const PageNumbers = connect(mapStateToProps, mapDispatchToProps)(ConnectedPageNumbers);

export default PageNumbers;



