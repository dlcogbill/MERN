import React, { useState } from 'react';
    
const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props;
    const [ newAge, setNewAge ] = useState(age);

    const handleClick = () => setNewAge( newAge + 1 );
    return (
        <div className="card">
            <h2>{lastName}, {firstName}</h2>
            <p> Age: {newAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button className='birthdayButton' onClick={ handleClick }>Birthday button for {firstName} {lastName}!</button>
        </div>
    );
}
export default PersonCard;