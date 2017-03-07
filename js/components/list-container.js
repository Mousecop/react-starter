import React from 'react'
import Card from './Card'
import List from './List'
import uuid from 'uuid'

export default class ListContainer extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
            text: "",
            cards:[
                {
                    id: uuid.v4(),
                    text: 'Card foobar'
                },
                {
                    id: uuid.v4(),
                    text: 'Card 2'
                }
            ]
        }

        this.onAddInputChanged = this.onAddInputChanged.bind(this);
        this.onAddSubmit = this.onAddSubmit.bind(this);
    }
    
    onAddSubmit(e) {
        e.preventDefault();
        // create a card object with valid id
        // push card object to state.cards array - MUST USE setState()
        const newCard = {
            id: uuid.v4(),
            text: this.state.text
        }
        const newCards = [ ...this.state.cards, newCard ];
        this.setState({ cards: newCards });
        // const form = document.getElementsByClassName('elFormo');
        // form.reset();
    }
    
    onAddInputChanged(e){
         this.setState({text:e.target.value}) 
    }
    
    render(){
        return (
            <List 
                listTitle = "This is a list"
                cards={this.state.cards}
                onAddInputChanged={this.onAddInputChanged} 
                onAddSubmit={this.onAddSubmit}
            />
        );
    }
}



