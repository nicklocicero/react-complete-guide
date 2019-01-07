import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  // state updates the dom when changed, re-renders page
  state = {
    persons: [
      { name: 'Dayton', age: 31 },
      { name: 'Denver', age: 29 },
      { name: 'Darver', age: 32}
    ]
  };

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: 'Jiles', age: 29 },
        { name: 'Jill', age: 50 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Gilly', age: 31 },
        { name: event.target.value, age: 29 },
        { name: 'Jill', age: 50 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Steele built railroad')} 
          changed={this.nameChangedHandler}>My hobbies: racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\' a React app!!!'));
  }
}

export default App;
