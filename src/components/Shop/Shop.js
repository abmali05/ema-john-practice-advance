import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, SetProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => SetProducts(data))
    }, [])

    // const handleAddToCart = () => {
    //     console.log("clicked");
    // }
    const handleAddToCart = (product) => {
        // console.log(product);
        // cart.push(product);
        const newCart = [...cart, product];
        // console.log(newCart);
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {/* <h2>This is product : {products.length}</h2> */}
                {
                    products.map(product =>
                        <Product key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                }

            </div>
            <div className="cart-container">
                <h2>This is Order</h2>
                <p>Selected Items: {cart.length} </p>

            </div>
        </div>
    );
};

export default Shop;