import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Products from './pages/Products';
import Manufacturing from './pages/Manufacturing';
import QualityPolicy from './pages/QualityPolicy';
import Clients from './pages/Clients';
import Gallery from './pages/Gallery';
import Enquiry from './pages/Enquiry';
import Contact from './pages/Contact';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="app-wrapper">
      <header>
        <div className="header-content">
          <div className="logo">
            <Link to="/"><img src="/images/logo.png" alt="Good Boxes" /></Link>
          </div>
          <div className="header-right">
            <div className="contact-info">
              <p>Email: <a href="mailto:goodboxes@gmail.com">goodboxes@gmail.com</a></p>
              <p>Mobile: +91 94440 83773</p>
              <div style={{ marginTop: '10px' }}>
                <Link to="/enquiry" style={{ marginRight: '10px' }}>Enquiry</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav>
        <ul>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>Profile</Link></li>
          <li><Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</Link></li>
          <li><Link to="/manufacturing" className={location.pathname === '/manufacturing' ? 'active' : ''}>Manufacturing Facilities</Link></li>
          <li><Link to="/quality-policy" className={location.pathname === '/quality-policy' ? 'active' : ''}>Quality Policy</Link></li>
          <li><Link to="/clients" className={location.pathname === '/clients' ? 'active' : ''}>Clients</Link></li>
          <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link></li>
          <li><Link to="/enquiry" className={location.pathname === '/enquiry' ? 'active' : ''}>Enquiry</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link></li>
        </ul>
      </nav>

      <div className="banner">
        <img src="/images/banner/p_0008.png" alt="Banner" />
      </div>

      <main className="main-layout">
        <div className="content-area">
          {children}
        </div>
        <aside className="sidebar">
          <div className="sidebar-box">
            <h3>Quick Enquiry</h3>
            <p style={{ fontSize: '13px', textAlign: 'center' }}>We manufacture 3Ply, 5Ply, 7Ply and 9Ply corrugated boxes in various sizes.</p>
            <div style={{ textAlign: 'center', marginTop: '15px' }}>
              <Link to="/enquiry" className="btn-primary">Send Enquiry</Link>
            </div>
          </div>
          <div className="sidebar-box">
            <h3>Contact Us</h3>
            <p style={{ fontSize: '13px' }}>
              No.15, A Sector, IV Avenue,<br />
              Sivasakthi Nagar, Chennai - 109.<br />
              Phone: 044 2636 1255
            </p>
          </div>
        </aside>
      </main>

      <footer>
        <div className="footer-links">
          <Link to="/">Home</Link> |
          <Link to="/profile">Profile</Link> |
          <Link to="/products">Products</Link> |
          <Link to="/manufacturing">Manufacturing</Link> |
          <Link to="/quality-policy">Quality Policy</Link> |
          <Link to="/clients">Clients</Link> |
          <Link to="/gallery">Gallery</Link> |
          <Link to="/enquiry">Enquiry</Link> |
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="footer-bottom">
          <p><strong>Good Boxes</strong>: No.15, A Sector, IV Avenue, Sivasakthi Nagar, Chennai - 600 109.</p>
          <p>Powered by <a href="http://www.jbsoftsystem.com" target="_blank">J B Soft System</a>, Chennai</p>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<Products />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/quality-policy" element={<QualityPolicy />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
