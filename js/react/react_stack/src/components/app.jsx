import React from 'react';
import ReactDOM from 'react-dom';

//creating a comonent object
class App extends ReactDOM.Component{
  constructor(){
    super();
    this.state = {
      messages: [
        'Hi there, how are you?',
        'I am fine, and you?'
      ],
    };
  }

  render(){
    var messageNodes = this.state.messages.map((message)=> {
      return (
        `<div>{message}</div>`
      );
    });

    return(
      `<div>{messageNode}</ div>`
    )
  }
}

export default App;
