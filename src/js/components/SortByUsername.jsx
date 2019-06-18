import React from "react";
import "./sortByEmailStyles.css"

const SortByUsername = (props) => {
    return <button className="sort-username" onClick={props.sortUsername}>
			    <span>
				    <i className="fas fa-sort-amount-up"></i>
			    </span>
                <span className="sort-username-title">Sort by username</span>
		</button>
};

export default SortByUsername;