import React from "react";

// we can only return one element per component
// inside the first div, we have "grow" which is an animatin.
//
const Card = ({ name, email, id }) => {

  return(
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
    <img alt="robots" src={`https://robohash.org/${id}`}/>
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
    </div>
  );
}

export default Card;
