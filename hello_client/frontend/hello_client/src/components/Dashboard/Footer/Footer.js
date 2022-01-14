import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <section className='footer-sub'>
        <h2 className='footer-sub-heading'>
        Ready to get started?
        </h2>
        <p className='footer-sub-text'>
        Take control of your Business Data.
        <br></br>
        Try saas to make your business better
        </p> 
      </section>
      <button class="button1">
        {/* <Link to="/somewhere">Get Started</Link> */}
        <a href='/somewhere' className='get'>Get Started</a>
      </button>
      <footer className="Copyright">
          <p>© BrandName. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;