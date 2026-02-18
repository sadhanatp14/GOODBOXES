import React from 'react';

const QualityPolicy = () => {
    return (
        <div className="card">
            <h1>Quality Policy</h1>
            <div className="contents">
                <div style={{ textAlign: 'center', margin: '20px 0' }}>
                    <img src="/images/quality.png" alt="Quality Policy" style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
                </div>
                <p>
                    We are committed to providing high-quality corrugated cardboard boxes that meet
                    our customers' requirements and expectations. Our focus is on continuous improvement
                    of our processes and products to ensure complete customer satisfaction.
                </p>
            </div>
        </div>
    );
};

export default QualityPolicy;
