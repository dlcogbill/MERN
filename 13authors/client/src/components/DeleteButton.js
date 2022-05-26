import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function DeleteButton(props) {
    const {id, removeAuthor } = props;
    const navigate = useNavigate();
    const deleteHandler = () => {
        axios
            .delete(`http://localhost:8000/api/authors/${id}`)
            .then((response) => { console.log("Pet Adopted"); })
            .catch((error) => { console.log('ERROR with delete', error); })
        removeAuthor(id);
        navigate("/");
    }

    return (
        <button onClick={deleteHandler}>Delete</button>
    );
}

export default DeleteButton;