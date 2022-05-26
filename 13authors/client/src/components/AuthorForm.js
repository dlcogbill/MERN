import React, { useEffect, useState } from 'react';

function AuthorForm(props) {
    const { submitHandler, author} = props;

    const [name,setName] = useState("");

    useEffect(() => {
        if (author) {
            setName(author.name);
        }
    }, [author]);

    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const formAuthor = {
            name: name,
        }
        submitHandler(formAuthor, setErrors);
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <p className="formLabel">Author Name:</p>
                <input type="text" value={ name } onChange={ (event) => setName(event.target.value) } />
                {errors.name && <p className="text-danger">{errors.name.message}</p>}
            </label>
            <input className="submit" type="submit" value="Submit" />
        </form>
    )
}

export default AuthorForm