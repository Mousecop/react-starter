import React from 'react'
import List from './List'

export default class Board extends React.Component {
    constructor(props){
        super(props);
    }
    
    onAddInputChanged() {
        console.log("Input Changed");
    }
    onAddSubmit() {
        console.log("I was clicked!");
    }

    render() {
        const boardList = [];
        for(let i=0; i<3; i++) {
            boardList.push(<List listTitle={`Title of list ${i+1}`} onChange={this.onAddInputChanged} onMySubmit={this.onAddSubmit}/>);
        }
    const props = this.props;
    return (
        <div className="board">
        <h3 className="boardTitle">{props.boardTitle}</h3>
            {boardList}
        </div>
    );
    }
    
}
