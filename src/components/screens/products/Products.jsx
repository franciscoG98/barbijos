import React from 'react';
import '../pageStyles.css';
import './ProductStyles.css';
import black from '../../../media/NanoDak-black.jpeg';
import blue from '../../../media/NanoDak-blue.jpeg';
import white from '../../../media/NanoDak-white.jpeg';

function Products() {
    return (
        <div className="container">
            <h2>Products</h2>
            <section id="Products">
                <div className="media-box">
                    <img src={black} alt="Barbijo NanoDak color negro"/>
                </div>
                <div className="media-box">
                    <img src={blue} alt="Barbijo NanoDak color celeste"/>
                </div>
                <div className="media-box">
                    <img src={white} alt="Barbijo NanoDak color blanco"/>
                </div>
            </section>
        </div>
    )
}

export default Products;
