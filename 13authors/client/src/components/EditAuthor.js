import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import AuthorForm from './AuthorForm';

function EditAuthor() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [editAuthor,setEditAuthor] = useState({});

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/authors/'+ id)
            .then((response) => {
                setEditAuthor(response.data);
            })
            .catch((error) => {
                console.log('Error in get author', error);
            });
    },[]);

    const editAuthorDB = (author, setErrors) => {
        axios
            .put(`http://localhost:8000/api/authors/${id}`, author)
            .then((response) => { navigate('/'); })
            .catch((error) => { setErrors(error.response.data.error.errors); });
    };

    return (
        <div>
            <Link to='/'>Home</Link>
            <p>Edit this author:</p>
            <AuthorForm submitHandler={editAuthorDB} author={editAuthor} />
        </div>
    )
}

export default EditAuthor