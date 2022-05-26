import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';

function Home() {
    const [authors,setAuthors] = useState([]);
    const navigate = useNavigate();

    const removeAuthor = (removedId) => {
        setAuthors(authors.filter((author) => author._id !== removedId));
    }

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/authors')
            .then((response) => {
                setAuthors(response.data);;
            })
            .catch((error) => {
                console.log('Error in get authors', error);
            });
    },[]);
    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={`/new`}>Add an author</Link>
            <h2 className="">We have quotes by:</h2>
            <table className="">
                <thead>
                    <tr>
                        <th>Author name</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                {authors.map((author) => (
                    <tr key={author._id}>
                        <td><Link to={`/authors/${author._id}`}>{author.name}</Link></td>
                        <td>
                            <button onClick={() => navigate("/edit/" + author._id )}>Edit</button>
                            <DeleteButton id={author._id} removeAuthor={removeAuthor}/>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default Home;