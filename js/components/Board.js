import React from 'react'
import List from './List'

export default function Board() {
    const boardList = [];
    for(let i=0; i<3; i++) {
        boardList.push(<List />);
    }

    return (
        <div className="board">
            {boardList}
        </div>
    )
}