import React from 'react'
import Card from './Card'

export default function List(props) {
    const cardList = []
    for(let i=0; i<3; i++) {
        cardList.push(<Card text={`This is card ${i+1}`}/>);
    }
    return (
        <div className="list">
        <h3 className="listTitle">{props.listTitle}</h3>
            {cardList}
        </div>
    )
}
