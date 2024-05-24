const Header = () => {
  return (
    <header className="sb-flex">
        <img src="/icons/logo.svg" alt="Logo" />
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
    </header>
  );
};

export default Header;
