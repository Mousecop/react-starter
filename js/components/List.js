import React from 'react'
import Card from './Card'

export default function List() {
    const cardList = []
    for(let i=0; i<3; i++) {
        cardList.push(<Card />);
    }
    return (
        <div className="list">
            {cardList}
        </div>
    )
}