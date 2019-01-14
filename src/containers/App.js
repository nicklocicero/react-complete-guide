import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate()');
  //   return nextState.persons !== this.state.persons || nextState.showPersons != this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate()')
  }

  didComponentUpdate() {
    console.log('[UPDATE App.js] Inside didComponentUpdate()')
  }

  state = {
    persons: [
      { id: 'asda', name: 'Dayton', age: 31 },
      { id: 'afdonsoif', name: 'Darver', age: 32 },
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

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('[App.js] inside render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons:true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler} />
        {persons}
      </Aux>
    );
  }
}

// higher order component Radium
export default withClass(App, classes.App);
