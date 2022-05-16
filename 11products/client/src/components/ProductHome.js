import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ProductHome () {
    const [title,setTitle] = useState("Enter product title");
    const [price,setPrice] = useState(0.00);
    const [description,setDescription] = useState("Enter product description");
    const [formSubmitted,setFormSubmitted] = useState(false);

    const [products,setProducts] = useState([]);

    const navigate = useNavigate();
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

    return(
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
            <h2 className="">Product List</h2>
            <div className="">
                {products.map((product) => (
                    <div key={product._id}>
                        <h3><Link to={`/products/${product._id}`}>{product.title}</Link></h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductHome;