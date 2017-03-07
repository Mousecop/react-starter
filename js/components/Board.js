import React from 'react'

import ListContainer from './list-container'

export default class Board extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        const boardList = [];
        for(let i=0; i<2; i++) {
            boardList.push(<ListContainer listTitle={`Title of list ${i+1}`} />);
        }
    
        return (
            <div className="board">
            <h3 className="boardTitle">{this.props.boardTitle}</h3>
                {boardList}
            </div>
        );
    }
}
