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

  switchNameHandler = () => {
    //console.log('Clicked!');
    //this.state.persons[0].name = 'Maxmilinan' - do not change state directly, won't work
    this.setState({
      persons: [
        { name: 'Maxmilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Melanie', age: 22 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello from REACT!</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Gardening</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
      //This is compiled to this:
      //React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello from REACT!!!'))

      //Component has to have only one root element!
      //<p>This wont work!<p>
    );
  }
}

export default App;
