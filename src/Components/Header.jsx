const Header = ({ clicked, setClicked }) => {
  return (
    <header className="pad header sb-flex">
      <div className="image sb-flex">
        <img src="/icons/logo.svg" alt="Logo" />
        <div
          className={clicked === "true" ? "hamburger active" : "hamburger"}
          onClick={() =>
            clicked === "true" ? setClicked("false") : setClicked("true")
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className={clicked === "true" ? "sb-flex active" : "sb-flex"}>
        <ul className="all-flex gp-20">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <ul className="all-flex gp-20">
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
