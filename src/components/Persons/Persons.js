import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {

    constructor(props) {
        super(props); //Always call super constructor
        console.log('[Persons.js] - Inside constructor', props);
    }

    componentWillMount() {
        console.log('[Persons.js] - Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js] - Inside componentDidMount()');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] - Inside componentWillReceiveProps()', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] - Inside shouldComponentUpdate()', nextProps, nextState);
    //     //return true; //Return based on check of nextProps and nextState
    //     //return false; //This will stop the update process
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] - Inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] - Inside componentDidUpdate()');
    }

    render() {
        console.log('[App.js] - Inside render()');
        return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />

        });
    }
}

export default Persons;