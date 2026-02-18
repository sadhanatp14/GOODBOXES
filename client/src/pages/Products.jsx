import React from 'react';

const Products = () => {
    const products = [
        { name: 'RCS', img: '/images/rsc.png' },
        { name: 'Die Cut Boxes', img: '/images/die-cut.png' },
        { name: 'Heavy Cut Boxes', img: '/images/heavey-cut.png' },
        { name: 'Records Storage', img: '/images/record.png' },
        { name: 'Multi Color Printed', img: '/images/multi-color.png' }
    ];

    return (
        <div className="card">
            <h1>Products</h1>
            <div className="gallery-grid">
                {products.map((product, index) => (
                    <div key={index} className="gallery-item">
                        <img src={product.img} alt={product.name} />
                        <p className="sub-cap">{product.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
