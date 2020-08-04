import React from 'react'
import './Card.css';

const Card = (props) => {
  return (
    <div className='card-item'>
      <img src={`https://robohash.org/${props.id}?set=set3`} alt='robot-face'/>
      <h2>{props.name}</h2>
      <p>{props.site}</p>
    </div>
  );
}
export default Card;