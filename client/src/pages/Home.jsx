import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="welcome-section card">
            <h1>Welcome to <span style={{ color: '#035497' }}>Good Boxes</span></h1>
            <img src="/images/pict4.png" alt="Cardboard Boxes" />
            <p>
                We introduce ourselves as one of the upcoming manufacturers of Corrugated Carton Boxes.
                We have got two units situated in Annanur & Thirumullaivoyal Sidco Women Industrial Estate
                which is in close proximity to the Amb. Industrial Estate & Redhills, enabling us to
                provide the best service to our customers.
            </p>
            <p>
                We have got in-house facilities for the conversion of flute to finished boxes.
                We manufacture 3Ply, 5Ply, 7Ply, and 9Ply corrugated boxes in various sizes as per
                customer requirements. The plant is managed by qualified professionals in Printing Technology
                with vast experience in the Packaging Industry of around 20 years.
            </p>
            <div style={{ marginTop: '20px' }}>
                <Link to="/profile" className="btn-primary">Read More</Link>
            </div>

            <div style={{ marginTop: '40px' }} className="gallery-grid">
                <div className="gallery-item">
                    <Link to="/products">
                        <h3>Our Products</h3>
                        <img src="/images/center1.gif" alt="Products" style={{ marginTop: '10px' }} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
