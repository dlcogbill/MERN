import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditProduct () {
    const [title,setTitle] = useState("Enter product title");
    const [price,setPrice] = useState(0.00);
    const [description,setDescription] = useState("Enter product description");
    const [formSubmitted,setFormSubmitted] = useState(false);

    const {id} = useParams();

    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/products/'+ id)
            .then((response) => {
                console.log("response data:", response.data);
                setTitle(response.data.title);
                setPrice(response.data.price);
                setDescription(response.data.description);
                console.log("state product", title, price,description);
            })
            .catch((error) => {
                console.log('Error in get product', error);
            });
    },[formSubmitted]);

    const handleEditedProduct = (event) => {
        event.preventDefault();
        axios
            .put('http://localhost:8000/api/products/'+ id,{
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
            
        navigate("/");
    };
    return (
        <div>
            <h2 className="">Edit a Product</h2>
            <form onSubmit={ handleEditedProduct } className="">
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
                <input type="submit" value="Edit Product" />
            </form>
        </div>
    )
}
export default EditProduct;