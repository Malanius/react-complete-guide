import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hello from REACT!</h1>
            <p className={assignedClasses.join(' ')}>Paragraph with dynamic className</p>
            <button
                className={btnClass}
                onClick={props.clicked}>
                Toggle persons
          </button>
        </div>
    );
};

export default cockpit;