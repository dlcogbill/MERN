import React, { useState } from 'react';

const UserForm = () => {
    const [firstName,setFirstName] = useState("");
    const [firstNameError,setFirstNameError] = useState("");
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length > 0 && e.target.value.length < 2) {
            setFirstNameError("First Name must be 2 characters or longer!");
        } else {
            setFirstNameError("");
        }
    };

    const [lastName,setLastName] = useState("");
    const [lastNameError,setLastNameError] = useState("");
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length > 0 && e.target.value.length < 2) {
            setLastNameError("Last Name must be 2 characters or longer!");
        } else {
            setLastNameError("");
        }
    };

    const [email,setEmail] = useState("");
    const [emailError,setEmailError] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length > 0 && e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else {
            setEmailError("");
        }
    };

    const [password,setPassword] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length > 0 && e.target.value.length < 8 && password !== confirm ) {
            setPasswordError("Password must be 8 characters or longer and match Confirm!");
        } else {
            setPasswordError("");
        }
    };
    
    const [confirm,setConfirm] = useState("");
    const [confirmError,setConfirmError] = useState("");
    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        if(e.target.value.length > 0 && e.target.value.length < 8 &&  confirm !== password) {
            setConfirmError("Confirm Passsword must be 8 characters or longer and match Confirm!");
        } else {
            setConfirmError("");
        }
    };

    const [formSubmitted,setFormSubmitted] = useState("Welcome, please submit the form");
    const handleSubmit = (event) => {
        event.preventDefault();

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirm("");

        setFormSubmitted("Thank your for submitting the form!")
    };

    return(
        <div>
            <form onSubmit={ handleSubmit } className="userForm">
            <p>{ formSubmitted }</p>
                <label>
                    <p className="formLabel">First Name: </p>
                    <input type="text" value={firstName} onChange={ handleFirstName } />
                </label>
                {
                    firstNameError ?
                    <p>{ firstNameError }</p> :
                    ''
                }
                <label>
                    <p className="formLabel">Last Name: </p>
                    <input type="text" value={lastName} onChange={ handleLastName } />
                </label>
                {
                    lastNameError ?
                    <p>{ lastNameError }</p> :
                    ''
                }
                <label>
                    <p className="formLabel">Email Address: </p>
                    <input type="text" value={email} onChange={ handleEmail } />
                </label>
                {
                    emailError ?
                    <p>{ emailError }</p> :
                    ''
                }
                <label>
                    <p className="formLabel">Password: </p>
                    <input type="password" value={password} onChange={ handlePassword } />
                </label>
                {
                    passwordError ?
                    <p>{ passwordError }</p> :
                    ''
                }
                <label>
                    <p className="formLabel">Confirm Password: </p>
                    <input type="password" value={confirm} onChange={ handleConfirm } />
                </label>
                {
                    confirmError ?
                    <p>{ confirmError }</p> :
                    ''
                }
                <input type="submit" />
            </form>
            <h2 className="dataTitle">Your Form Data</h2>
            <div className="col">
                <div className="row"><p className="formLabel">First Name:</p><p>{ firstName }</p></div>
                <div className="row"><p className="formLabel">Last Name:</p><p>{ lastName }</p></div>
                <div className="row"><p className="formLabel">Email:</p><p>{ email }</p></div>
                <div className="row"><p className="formLabel">Password:</p><p>{ password }</p></div>
                <div className="row"><p className="formLabel">Confirm:</p><p>{ confirm }</p></div>
            </div>
        </div>
    );
}

export default UserForm;