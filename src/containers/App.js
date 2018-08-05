import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props); //Always call super constructor
    console.log('[App.js] - Inside constructor', props);

    //This will work at older project setups
    this.state = {
      persons: [
        { id: 'prs1', name: 'Max', age: 28 },
        { id: 'prs2', name: 'Manu', age: 29 },
        { id: 'prs3', name: 'Melanie', age: 21 }
      ],
      otherState: 'some other value', //will be untouched by setState
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('[App.js] - Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] - Inside componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] - Inside shouldComponentUpdate()', nextProps, nextState);
    return nextState.persons !== this.state.persons ||
      nextState.showPersons !== this.state.showPersons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] - Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] - Inside componentDidUpdate()');
  }

  // This will work only with ES6 enabled
  // state = {
  //   persons: [
  //     { id: 'prs1', name: 'Max', age: 28 },
  //     { id: 'prs2', name: 'Manu', age: 29 },
  //     { id: 'prs3', name: 'Melanie', age: 21 }
  //   ],
  //   otherState: 'some other value', //will be untouched by setState
  //   showPersons: false
  // }

  deletePersonHandler = (index) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandrer = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //or const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    console.log('[App.js] - Inside render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandrer}
        />
      );
    }

    return (
      <div className={classes.App}>
        <button
          onClick={() => {
            this.setState({ showPersons: true })
          }}>
          Show persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}

      </div>
      //This is compiled to this:
      //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello from REACT!!!'))

      //Component has to have only one root element!
      //<p>This wont work!<p>

    );
  }

}

export default App;
