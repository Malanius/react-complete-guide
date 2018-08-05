import React from 'react';
import classes from './Cockpit.css'
import Aux from '../../hoc/Auxilliary';

const cockpit = (props) => {

    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    let btnClass = classes.Button;
    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>Paragraph with dynamic className</p>
            <button
                className={btnClass}
                onClick={props.clicked}>
                Toggle persons
          </button>
        </Aux>
    );
};

export default cockpit;