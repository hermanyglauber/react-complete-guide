import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons:[
      { name: 'Glauber', age: 33 },
      { name: 'Greice', age: 30 }
    ]
  }

  switchNameHandler = () => {
    //console.log("button was clicked!");
    this.setState({
      persons: [
        { name: 'Glauber Hermany', age: 33 },
        { name: 'Greice Heinrich', age: 30 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>I am a react app</h1>
          <button onClick={this.switchNameHandler}>Switch person</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies: Soccer</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Party</Person>
      </div>
    );
    // return  React.createElement('div',{className: 'App'}, React.createElement('h1', null,'I am a react app'));
  }
}

export default App;