import Link from "next/link";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcDiscover, FaFacebookF, FaInstagram, FaTwitter,FaLinkedinIn, FaBehance } from "react-icons/fa";

const Footer = () => {
    
  return (
    <footer id="footer">
      <div className="footer-first">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="logo">
                <Link href="/">
                  <span>ChiRkLi</span>
                </Link>
              </div>
              <ul className="footer-list">
                <li>
                  <span className="media">
                    Calista Wise 7292 Dictum Av. <br /> Antonio, Italy.
                  </span>
                </li>
                <li>
                  <span className="media">(+01)-800-3456-88</span>
                </li>
                <li>
                  <Link
                    className="media-link"
                    href="mailto:nasathemes@gmail.com"
                  >
                    nasathemes@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-2">
              <span className="site-map">PRODUCTS</span>
              <ul className="footer-list">
                <li>
                  <Link className="site-link" href="#">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="site-link" href="#">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="site-link" href="#">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="site-link" href="#">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-2">
              <span className="site-map">COMPANY</span>
              <ul className="footer-list">
                <li>
                  <Link className="site-link" href="#">
                  New Products
                  </Link>
                </li>
                <li>
                  <Link className="site-link" href="#">
                  Free Shipping
                  </Link>
                </li>
                <li>
                  <Link className="site-link" href="#">
                  Careers
                  </Link>
                </li>
                <li>
                  <Link className="site-link" href="#">
                  Our Lookbook
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-5">
              <span className="site-map" style={{ fontSize: "17px" }}>
                Subscribe Newsletter
              </span>
              <form className="submit">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email here"
                />
                <button type="submit">SUBSCRIBE</button>
              </form>
              <div className="opening-time">
                <span className="day">Monday - Friday/</span>
                <span className="time">08:00 - 20:00</span>
              </div>
              <div className="visa-cart">
                <span className="carts p-1">
                  <FaCcVisa/>
                </span>
                <span className="carts p-1">
                  <FaCcMastercard/>
                </span>
                <span className="carts p-1">
                  <FaCcPaypal/>
                </span>
                <span className="carts p-1">
                  <FaCcDiscover/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-second">
        <div className="container">
          <div className="row-second">
            <p>© 2022 <strong>Nasatheme</strong> - All Right reserved!</p>
            <ul className="sosial">
              <li>
                <Link target="blank" href="https://www.facebook.com/rollsroycemotorcar"><FaFacebookF/></Link>
              </li>
              <li>
                <Link target="blank" href="https://www.instagram.com/rollsroycecars/"><FaInstagram/></Link>
              </li>
              <li>
                <Link target="blank" href="https://twitter.com/explore"><FaTwitter/></Link>
              </li>
              <li>
                <Link target="blank" href="https://www.linkedin.com/company/rolls-royce/"><FaLinkedinIn/></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
