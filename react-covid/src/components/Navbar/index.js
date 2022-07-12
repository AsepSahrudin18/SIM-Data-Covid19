import { Link } from "react-router-dom";
import StyledNav from "./Navbar.styled";

function Navbar() {
  return (
    <StyledNav>
      <nav>
        <div>
          <h1>Covid ID</h1>
        </div>
        <ul>
          <li>
            <Link to="/">Global</Link>
          </li>

          <li>
            <Link to="/covid/indonesia">Indonesia</Link>
          </li>

          <li>
            <Link to="/covid/provinsi">Provinsi</Link>
          </li>

          <li>
            <Link to="/covid/about">About</Link>
          </li>
        </ul>
      </nav>
    </StyledNav>
  );
}

export default Navbar;
