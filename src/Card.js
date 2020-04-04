import React from "react";

const Card = ({name, email, id}) => {
    return (
        <div className='tc bg-light-pink dib br3-ns pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src = {`https://robohash.org/${id}?200x200?set=set4`}/>
            <h2> {name} </h2>
            <p>{email}</p>
        </div>
    );
};

export default Card;