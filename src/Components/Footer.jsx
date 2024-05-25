const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <div className="links sb-flex">
        <div>
          <img src="/icons/white-logo.svg" alt="White Logo" />
          <p>Try a variety of options when using our services.</p>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            <li>
              <a href="#" className="white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="white">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Resources</h2>
          <ul>
            <li>
              <a href="#" className="white">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="white">
                Promo
              </a>
            </li>
            <li>
              <a href="#" className="white">
                Req Demo
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Support</h2>
          <ul>
            <li>
              <a href="#" className="white">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="white">
                Support Center
              </a>
            </li>
            <li>
              <a href="#" className="white">
                Feedback
              </a>
            </li>
            <li>
              <a href="#" className="white">
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="big-text txt-ct p">Copyright &copy; LuxuryTravels {year}</p>
    </footer>
  );
};

export default Footer;
