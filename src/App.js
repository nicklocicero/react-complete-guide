import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  // state updates the dom when changed, re-renders page
  state = {
    persons: [
      { id: 'asda', name: 'Dayton', age: 31 },
      { id: 'afdonsoif', name: 'Darver', age: 32},
      { id: 'asdfa', name: 'Denver', age: 29 }
    ],
    username: 'noel',
    showPersons: true
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

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age} 
                key={person.id} />
            )
          })}
          {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, 'Steele built railroad')} 
            changed={this.nameChangedHandler}>My hobbies: racing</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} /> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\' a React app!!!'));
  }
}

export default App;
