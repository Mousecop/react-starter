import React from 'react'
import Card from './Card'
import ListContainer from './list-container'


export default class List extends React.Component {
    constructor(props) {
        super(props);
     
    }
    
    
    
    render(){
        const cardList = this.props.cards.map(card => {
            return <Card key={card.id} text={card.text} />;
        });

        // const props = this.props; //redefine props in render function to use props insides.
        const { listTitle, onAddInputChanged, onAddSubmit } = this.props;

        return (
            <div className="list">
                <h3 className="listTitle">{listTitle}</h3>
                {cardList}
                <form onSubmit={onAddSubmit} className="elFormo" id="formId">
                    <input type="text" onChange={onAddInputChanged}  />
                                       
                    <button type="submit">Click Me!</button>
                </form>
            </div>
        );
    }
}
