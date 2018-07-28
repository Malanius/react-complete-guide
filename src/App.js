import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Melanie', age: 21 }
    ],
    otherState: 'some other value' //will be untouched by setState
  }

  switchNameHandler = (newName) => {
    //console.log('Clicked!');
    //this.state.persons[0].name = 'Maxmilinan' - do not change state directly, won't work
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Melanie', age: 22 }
      ]
    })
  }

  nameChangedHandrer = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Melanie', age: 21 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello from REACT!</h1>
        <button onClick={() => this.switchNameHandler('Maxmillian!!')}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandrer}
        >
          Hobbies: Gardening
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
      //This is compiled to this:
      //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello from REACT!!!'))

      //Component has to have only one root element!
      //<p>This wont work!<p>
    );
  }
}

export default App;
