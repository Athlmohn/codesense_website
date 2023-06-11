import React from "react";
import "./Footer.css";
import footer from "../../assets/img/footer.png";
import { Link } from "react-router-dom";
function Footer() {
  const handleClick =()=>{
    window.scrollTo(0,0);
  }
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_box">
            <div className="logo">
              <div className="logo-img">
                <img src={footer} alt="" />
              </div>
              <h2>Code Sense</h2>
            </div>
            <p>
              Embrace the future of innovation and technology with our
              cutting-edge tech business solutions.
            </p>
          </div>
          <div className="footer_box">
            <h4 className="footer_title">Company</h4>
            <ul className="footer_links">
              <Link to={'/courses'} onClick={handleClick}><li>Our Programs</li></Link>
              <Link to={'/services'} onClick={handleClick}><li>Our Plan</li></Link>
              <li><a href="/#">Become a Member</a></li>
            </ul>
          </div>
          <div className="footer_box">
            <h4 className="footer_title">Quick Links</h4>
            <ul className="footer_links">
              <Link to={'/about'} onClick={handleClick}><li>About Us</li></Link>
             <Link to={'/contact'} onClick={handleClick}> <li>Contact Us</li></Link>
              <Link to={'/support'} onClick={handleClick} ><li>Support Us</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
