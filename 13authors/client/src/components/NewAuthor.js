import React from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import AuthorForm from './AuthorForm';

function NewAuthor() {
  const navigate = useNavigate();
  const newAuthor = {
    name: '',
  };
  
  const addAuthor = (author, setErrors) => {
    axios
      .post('http://localhost:8000/api/authors', author)
      .then((response) => { navigate('/') } )
      .catch((error) => { setErrors(error.response.data.error.errors); })
  };

  return (
    <div>
      <Link to='/'>Home</Link>
      <p>Add a new author:</p>
      <AuthorForm submitHandler={addAuthor} author={newAuthor} />
    </div>
  )
}

export default NewAuthor;