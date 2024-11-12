import './Footer.css';
import icon1 from '../../images/facebook.png';
import icon2 from '../../images/instagram.png';
import icon3 from '../../images/twitter.png';
import icon4 from '../../images/youtube.png';

export const Footer = () => (
  <footer className="footer">
    <div className="signature">
      MEJIWOO
      <br />
      미지우
    </div>

    <div className="footer-links">
      <a className="bold-black" href="/privacy">About us</a>
      <a href="/terms">News</a>
      <a href="/contact">Official Store</a>
      <a href="/contact">Company</a>
      <a href="/contact">Careers</a>
    </div>

    <div className="footer-links">
      <a className="bold-black" href="/privacy">Get Help</a>
      <a href="/terms">FAQ</a>
      <a href="/contact">Shipping</a>
      <a href="/contact">Payment</a>
      <a href="/contact">Returns</a>
      <a href="/contact">Contact Us</a>
    </div>

    <div className="social-section">
      <a className="bold-black">Follow Us</a>
      <div className="social-icons">
        <span><img src={icon1} alt="Facebook" /></span>
        <span><img src={icon2} alt="Instagram" /></span>
        <span><img src={icon3} alt="Twitter" /></span>
        <span><img src={icon4} alt="YouTube" /></span>
      </div>
    </div>

    <div className="footer-underlinks">
      <a className="bold-black" href="/Guide">Guide</a>
      <a className="bold-black" href="/Terms & Conditions">Terms & Conditions</a>
      <a className="bold-black" href="/Privacy Policy">Privacy Policy</a>
    </div>
  </footer>
);
