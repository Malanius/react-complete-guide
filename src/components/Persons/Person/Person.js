import React, { Component } from 'react';
import classes from './Person.css'
import Aux from '../../../hoc/Auxilliary';
import withClass2 from '../../../hoc/withClass2';

class Person extends Component {

  constructor(props) {
    super(props); //Always call super constructor
    console.log('[Person.js] - Inside constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] - Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] - Inside componentDidMount()');
  }

  render() {
    return (
      <Aux>
        <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </Aux>);
    // return [
    //   <p key="1" onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>,
    //   <p key="2">{this.props.children}</p>,
    //   <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
    // ]
  };
}

export default withClass2(Person, classes.Person);
