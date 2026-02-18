import React, { useState } from 'react';

const Enquiry = () => {
    const [formData, setFormData] = useState({
        FullName: '',
        Address: '',
        City: '',
        Zip_Code: '',
        PhoneNo: '',
        Email: '',
        Comments: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'info', message: 'Sending message...' });

        try {
            const response = await fetch('http://localhost:5003/api/enquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: data.message });
                setFormData({
                    FullName: '', Address: '', City: '', Zip_Code: '',
                    PhoneNo: '', Email: '', Comments: ''
                });
            } else {
                setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again later.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Could not connect to the server. Please check your internet connection and try again.' });
        }
    };

    return (
        <div className="card">
            <h1>Online Enquiry</h1>
            <p style={{ marginBottom: '20px' }}>
                We request you to give us an opportunity to prove ourselves.
                We are eagerly looking forward to receiving your valued orders at the earliest.
            </p>

            {status.message && (
                <div style={{
                    padding: '10px',
                    marginBottom: '20px',
                    borderRadius: '4px',
                    backgroundColor: status.type === 'error' ? '#f8d7da' : (status.type === 'success' ? '#d4edda' : '#d1ecf1'),
                    color: status.type === 'error' ? '#721c24' : (status.type === 'success' ? '#155724' : '#0c5460'),
                    border: `1px solid ${status.type === 'error' ? '#f5c6cb' : (status.type === 'success' ? '#c3e6cb' : '#bee5eb')}`
                }}>
                    {status.message}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="FullName">FullName <span style={{ color: 'red' }}>*</span></label>
                    <input type="text" id="FullName" name="FullName" value={formData.FullName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="Address">Address</label>
                    <textarea id="Address" name="Address" value={formData.Address} onChange={handleChange} rows="3" />
                </div>
                <div className="form-group">
                    <label htmlFor="City">City</label>
                    <input type="text" id="City" name="City" value={formData.City} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="Zip_Code">Pin Code / Zip Code</label>
                    <input type="text" id="Zip_Code" name="Zip_Code" value={formData.Zip_Code} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="PhoneNo">Phone No <span style={{ color: 'red' }}>*</span></label>
                    <input type="text" id="PhoneNo" name="PhoneNo" value={formData.PhoneNo} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email <span style={{ color: 'red' }}>*</span></label>
                    <input type="email" id="Email" name="Email" value={formData.Email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="Comments">Comments <span style={{ color: 'red' }}>*</span></label>
                    <textarea id="Comments" name="Comments" value={formData.Comments} onChange={handleChange} rows="5" required />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <button type="submit" className="btn-primary">Send Message</button>
                    <button type="reset" className="btn-primary" style={{ marginLeft: '10px', backgroundColor: '#666' }} onClick={() => setFormData({
                        FullName: '', Address: '', City: '', Zip_Code: '',
                        PhoneNo: '', Email: '', Comments: ''
                    })}>Clear</button>
                </div>
            </form>
        </div>
    );
};

export default Enquiry;
