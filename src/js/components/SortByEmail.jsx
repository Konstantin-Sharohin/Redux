import React from "react";
import "./sortByEmailStyles.css"

const SortByEmail = (props) => {
    return <button className="sort-email" title="Sort by email" onClick={props.sortByEmail}>
			    <span>
				    <i className="fas fa-sort-amount-up"></i>
			    </span>
                <span className="sort-email-title">Sort by email</span>
		</button>
};

export default SortByEmail;