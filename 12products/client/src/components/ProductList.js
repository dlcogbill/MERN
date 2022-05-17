import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductList(props) {
    const {formSubmitted} = props;
    const [products,setProducts] = useState([]);

    useEffect((products) => {
        axios
            .get('http://localhost:8000/api/products')
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
                console.log(products);
            })
            .catch((error) => {
                console.log('Error in get products', error);
            });
    },[formSubmitted]);

    const handleDeleteProduct = (productId) => {
        axios
            .delete('http://localhost:8000/api/products' + productId )
            .then((response) =>{
                console.log(response.data);
                setProducts(products.filter((product) => product._id !== productId));
            })
            .catch((error) => {
                console.log('ERROR', error);
            });
    }
    
    return (
        <div>
            <h2 className="">Product List</h2>
            <div className="">
                {products.map((product) => (
                    <div key={product._id}>
                        <h3>
                            <Link to={`/products/${product._id}`}>{product.title}</Link>|
                            <Link to={`/products/edit/${product._id}`}>Edit</Link>|
                            <button onClick={ () => handleDeleteProduct(product._id) }>Delete Product</button>
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList