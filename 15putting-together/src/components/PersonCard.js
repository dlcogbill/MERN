import React from 'react';

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
        }
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log(this.state.age);
        this.setState({age: this.state.age + 1});

    }
    render() {
        return (
            <div>
                <h2>{this.props.lastName}, {this.props.firstName}</h2>
                <p> Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button className='birthdayButton' onClick={ this.handleClick }>Birthday button for {this.props.firstName} {this.props.lastName}!</button>
            </div>
        )
    }
}

export default PersonCard;