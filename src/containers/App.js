import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'prs1', name: 'Max', age: 28 },
      { id: 'prs2', name: 'Manu', age: 29 },
      { id: 'prs3', name: 'Melanie', age: 21 }
    ],
    otherState: 'some other value', //will be untouched by setState
    showPersons: false
  }

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
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={(event) => this.nameChangedHandrer(event, person.id)} />
            })
          }
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
        <h1>Hello from REACT!</h1>
        <p className={assignedClasses.join(' ')}>Paragraph with dynamic className</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>
          Toggle persons
          </button>

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