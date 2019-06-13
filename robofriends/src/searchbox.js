import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input type="search"
                    placeholder="Search robots" 
                    className = "pa3 mb5 ba br3 w-25 b--green bg-lightest-blue"
                    onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;