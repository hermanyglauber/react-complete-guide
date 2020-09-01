import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person";

const app = () => {
  const [personsState, setPersonsState] = useState({
               persons:[
                 { name: 'Glauber', age: 33 },
                 { name: 'Greice', age: 30 }
               ]
             });

  const [otherState, useOtherState] = useState('user other state');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log("button was clicked!");
    setPersonsState({
      persons: [
        { name: 'Glauber Hermany', age: 33 },
        { name: 'Greice Heinrich', age: 30 }
      ]
    })
  };

  return (
      <div className="App">
        <h1>I am a react app</h1>
          <button onClick={switchNameHandler}>Switch person</button>
          <Person click={switchNameHandler} name={personsState.persons[0].name} age={personsState.persons[0].age}>My hobbies: Soccer</Person>
          <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Party</Person>
      </div>
    );
    // return  React.createElement('div',{className: 'App'}, React.createElement('h1', null,'I am a react app'));
};

export default app;