import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I am a react app</h1>
          <Person name="Glauber" age="28">My hobbies: Soccer</Person>
      </div>
    );
    // return  React.createElement('div',{className: 'App'}, React.createElement('h1', null,'I am a react app'));
  }
}

export default App;
