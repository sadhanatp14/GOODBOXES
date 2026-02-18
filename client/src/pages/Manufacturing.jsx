import React from 'react';

const Manufacturing = () => {
    const machinery = [
        '52" NF Corrugation Machine with Auto Cutter',
        '75" Pasting Machine - 2 Nos.',
        '75" Slotting Machine',
        '75" Rotary & Creasing Machine',
        'Stitching Machine - 4 Nos.',
        '72"x50" Punching Machine - Very few available in Chennai, Punc. M/C. 2 Nos.',
        'Flexo Single colour Printing Machine',
        'Gum Stirrer',
        'Manual Cutting Machine'
    ];

    return (
        <div className="card">
            <h1>Manufacturing Facilities</h1>
            <div className="contents">
                <h3>List of machineries installed in our plant.</h3>
                <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
                    {machinery.map((item, index) => (
                        <li key={index} style={{ marginBottom: '8px' }}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Manufacturing;
