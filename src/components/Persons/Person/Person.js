import React, { Component } from 'react';
import classes from './Person.css'
import Aux from '../../../hoc/Auxilliary';
import withClass2 from '../../../hoc/withClass2';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../containers/App'

class Person extends Component {

  constructor(props) {
    super(props); //Always call super constructor
    console.log('[Person.js] - Inside constructor', props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[Person.js] - Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] - Inside componentDidMount()');
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => auth ? <p>I'm authenticated</p> : null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </Aux>);
    // return [
    //   <p key="1" onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>,
    //   <p key="2">{this.props.children}</p>,
    //   <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
    // ]
  };
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func
}

export default withClass2(Person, classes.Person);
