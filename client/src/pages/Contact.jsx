import React from 'react';

const Contact = () => {
    return (
        <div className="card">
            <h1>Contact Us</h1>
            <div style={{ display: 'flex', gap: '30px', marginBottom: '30px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '250px' }}>
                    <div className="sidebar-box" style={{ height: '100%' }}>
                        <h3>Main Office</h3>
                        <p style={{ fontSize: '15px', lineHeight: '1.8' }}>
                            <strong>Good Boxes</strong><br />
                            No.15, A Sector, IV Avenue,<br />
                            Sivasakthi Nagar, Chennai - 600 109.<br /><br />
                            <strong>Mobile:</strong> +91 94440 83773<br />
                            <strong>Phone:</strong> 044 2636 1255<br />
                            <strong>Email:</strong> <a href="mailto:goodboxes@gmail.com">goodboxes@gmail.com</a>
                        </p>
                    </div>
                </div>
                <div style={{ flex: 1, minWidth: '250px' }}>
                    <div className="sidebar-box" style={{ height: '100%' }}>
                        <h3>Branch Address</h3>
                        <p style={{ fontSize: '15px', lineHeight: '1.8' }}>
                            <strong>Sidco Unit</strong><br />
                            Plot No: 313,<br />
                            Sidco Women Industrial Estate,<br />
                            Thirumullaivoyal, Chennai - 62
                        </p>
                    </div>
                </div>
            </div>

            <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <iframe
                    width="100%"
                    height="420"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.237038817613!2d80.12826278415324!3d13.120776668137276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526258e7e106f9%3A0x5d86282183da4521!2sGood%20Boxes%20Unit-I!5e0!3m2!1sen!2sin!4v1744976912026!5m2!1sen!2sin">
                </iframe>
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <small><a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.237038817613!2d80.12826278415324!3d13.120776668137276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526258e7e106f9%3A0x5d86282183da4521!2sGood%20Boxes%20Unit-I!5e0!3m2!1sen!2sin!4v1744976912026!5m2!1sen!2sin" target="_blank" rel="noreferrer">View Good Boxes in a larger map</a></small>
            </div>
        </div>
    );
};

export default Contact;
