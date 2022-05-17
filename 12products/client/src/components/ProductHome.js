import React, { useState } from 'react';
import ProductList from './ProductList';
import NewProduct from './NewProduct';

function ProductHome () {
    const [formSubmitted,setFormSubmitted] = useState(false);

    return(
        <div>
            <NewProduct setFormSubmitted={setFormSubmitted} />
            <ProductList formSubmitted={formSubmitted} />
        </div>
    );
}

export default ProductHome;