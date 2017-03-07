import React from 'react'
import Card from './Card'

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onMySubmit =  this.onMySubmit.bind(this);
    }
    
    onChange() {
        this.props.onChange();
    }
    onMySubmit() {
        this.props.onMySubmit();
    }
    render(){
        const cardList = [];
        for(let i=0; i<3; i++) {
            cardList.push(<Card text={`This is card ${i+1}`}/>);
        };
        // const props = this.props; //redefine props in render function to use props insides.
        return (
            <div className="list">
                <h3 className="listTitle">{this.props.listTitle}</h3>
                {cardList}
                <form className="elFormo">
                    <input type="text" onChange={this.onChange} />
                    <button type="submit" onClick={e => e.preventDefault()} onMySubmit={this.onMySubmit}>Click Me!</button>
                </form>
            </div>
        );
    }
}
