import React, { useEffect, useState } from 'react';
import facebookIcon from '../img2/facebookIcon.png'; 
import twitterIcon from '../img2/twitterIcon.png'; 
import instagramIcon from '../img2/instagramIcon.png'; 
export const Footer = () => {
    const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 20;
      setShowFooter(isBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer-container ${showFooter ? 'visible' : ''}`}>
    <div className="footer-content">
      <div className="social-icons">
      <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
      </div>
      <div className="footer-text">
        <p>&copy; 2023 Generaciones de Computadoras. Creado por: Esther Carvajal</p>
      </div>
    </div>
  </footer>
  )
}
