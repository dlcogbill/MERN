import React from 'react';
const PersonCards = (props) => {
    const { person } = props;
    console.log('person:', person);
    const { firstName, lastName, age, hairColor } = person;
    return (
        <div className="card">
            <h2>{lastName}, {firstName}</h2>
            <p> Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    );
};

export default PersonCards;