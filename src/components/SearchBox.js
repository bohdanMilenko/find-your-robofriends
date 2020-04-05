import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className= 'pa3'>
            <input
                className='pa3 ba b--near-white b--dotted bw3 bg-transparent'
                type='search'
                placeholder='Find your robot!'
                onChange = {searchChange}/>
        </div>

    )
};

export default SearchBox;
