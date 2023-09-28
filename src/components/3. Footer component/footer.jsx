import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <h2>
            Thanks for visiting. Feel free to get in touch</h2>
      <div className="footer-content">
        <div className="contact-info">
          
            <p><a href="https://github.com/Bjor91" target="_blank" rel="noopener noreferrer">My GitHub</a></p>
            <p><a href="www.linkedin.com/in/bjørn-h-3536595b" target="_blank" rel="noopener noreferrer">My LinkedIn</a></p>
          
        </div>
        <div className="additional-space">
          
        </div>
      </div>
    </div>
  );
}

export default Footer;