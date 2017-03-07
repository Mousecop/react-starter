import React from 'react'

export default function Card(props) {

  return (
      <div className = "card" >
        <p className = "text">{props.text} </p>
        </div>
    );
}

Card.defaultProps = {
    text: 'This is a Card!'
};
