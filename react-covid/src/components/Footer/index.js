import { Link } from "react-router-dom";
import StyledFooter, { Container } from "./Footer.styled";

function Footer() {
  return (
    <Container>
      <StyledFooter>
        <nav>
          <div>
            <h1>Covid ID</h1>
            <p>Developer by Asep Sahrudin</p>
          </div>
          <div>
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
          </div>
        </nav>
      </StyledFooter>
    </Container>
  );
}

export default Footer;
