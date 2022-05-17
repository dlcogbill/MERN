import React, { useState,useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';

function Product() {
    const [product,setProduct] = useState({});
    const {id} = useParams();
    console.log('ID', id);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/products/'+ id)
            .then((response) => {
                console.log("response data:", response.data);
                setProduct(response.data);
                console.log("state product", product);
            })
            .catch((error) => {
                console.log('Error in get product', error);
            });
    },[]);

    const handleDeleteProduct = () => {
        axios
            .delete('http://localhost:8000/api/products/' + id )
            .then((response) => {
                console.log(response.data);
                
            })
            .catch((error) => {
                console.log('ERROR', error);
            });
            navigate("/");
    }

    return(
        <div>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <button onClick={ handleDeleteProduct }>Delete product</button>
            <Link to={`/`}>Home</Link>
        </div>
    );
}

export default Product;