import Link from "next/link";

const Footer = () => {
    
  return (
    <footer id="footer">
      <div className="footer-first">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
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
            <div className="col-lg-3">
              <span className="site-map">Site Map</span>
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
            <div className="col-lg-3">
              <span className="site-map">Site Map</span>
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
            <div className="col-lg-3">
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
                <button type="submit">salam</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
