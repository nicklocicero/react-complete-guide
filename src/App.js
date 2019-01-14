import React, { Component } from 'react';
import classes from './App.css';
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      console.log(id);
      console.log(p.id);
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
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
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age} 
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            )
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I'm a React App!</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button className={btnClass}
            onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
        </div>
    );
  }
}

// higher order component Radium
export default App;
