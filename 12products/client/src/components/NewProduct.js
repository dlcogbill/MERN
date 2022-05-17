import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NewProduct(props) {
    const [title,setTitle] = useState("Enter product title");
    const [price,setPrice] = useState(0.00);
    const [description,setDescription] = useState("Enter product description");
    const {setFormSubmitted} = props;
    
    const navigate = useNavigate();

    const handleNewProduct = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:8000/api/products',{
                title,
                price,
                description,
            })
            .then((response) => {
                console.log(response.data);
                setFormSubmitted(true);
            })
            .catch((error) => {
                console.log('ERROR', error);
            });
            
        setTitle("Enter product title");
        setPrice(0.00);
        setDescription("Enter product description");
        setFormSubmitted(false);
        navigate("/");
    };

    return (
        <div>
            <h2 className="">Add a Product</h2>
            <form onSubmit={ handleNewProduct } className="">
                <label>
                    <p className="formLabel">Title: </p>
                    <input type="text" value={title} onChange={ (e) => setTitle(e.target.value) } />
                </label>
                <label>
                    <p className="formLabel">Price: </p>
                    <input type="text" value={price} onChange={ (e) => setPrice(e.target.value) } />
                </label>
                <label>
                    <p className="formLabel">Description: </p>
                    <input type="text" value={description} onChange={ (e) => setDescription(e.target.value) } />
                </label>
                <input type="submit" value="Add Product" />
            </form>
        </div>
    )
}

export default NewProduct