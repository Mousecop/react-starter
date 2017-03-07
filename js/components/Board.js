import React from 'react'
import List from './List'

export default function Board(props) {
    const boardList = [];
    for(let i=0; i<3; i++) {
        boardList.push(<List listTitle={`Title of list ${i+1}`}/>);
    }

    return (
        <div className="board">
        <h3 className="boardTitle">{props.boardTitle}</h3>
            {boardList}
        </div>
    )
}
