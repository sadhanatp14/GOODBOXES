import React from 'react';

const Clients = () => {
    const clients = [
        { name: 'TVS', img: '/images/tvs-logo.jpg' },
        { name: 'Breaks India', img: '/images/break-india-logo.jpg' },
        { name: 'Superfil', img: '/images/superfil.jpg' },
        { name: 'Ideal', img: '/images/ideal.jpg' },
        { name: 'Avo Carbon', img: '/images/avo-carbon.jpg' }
    ];

    return (
        <div className="card">
            <h1>Our Clients</h1>
            <div className="gallery-grid">
                {clients.map((client, index) => (
                    <div key={index} className="gallery-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '120px' }}>
                        <img src={client.img} alt={client.name} style={{ maxHeight: '100%', width: 'auto' }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clients;
