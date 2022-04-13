import React, { useState } from 'react';
function PersonCards(props) {
    const { person } = props;
    console.log('person:', person);
    const { firstName, lastName, age, hairColor } = person;
    const [newAge, setNewAge] = useState(age);

    const handleClick = () => setNewAge(newAge + 1);
    return (
        <div className="card">
            <h2>{lastName}, {firstName}</h2>
            <p> Age: {newAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button className='birthdayButton' onClick={ handleClick }>Birthday button for {firstName} {lastName}!</button>
        </div>
    );
}

export default PersonCards;