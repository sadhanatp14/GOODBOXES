import React from 'react';

const Gallery = () => {
    const photos = Array.from({ length: 19 }, (_, i) => i + 1).filter(n => n !== 8); // skipping 8 as it was commented out/missing in PHP

    return (
        <div className="card">
            <h1>Gallery</h1>
            <div className="gallery-grid">
                {photos.map((num) => (
                    <div key={num} className="gallery-item">
                        <img src={`/images/gallery/photo${num}.png`} alt={`Gallery ${num}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
