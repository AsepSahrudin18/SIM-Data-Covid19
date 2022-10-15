import { Link } from "react-router-dom";
import StyledNav, { Conteiner } from "./Navbar.styled";

function Navbar({ listItem }) {
  return (
    <Conteiner>
      <StyledNav>
        <nav>
          <div>
            <h1>Covid ID</h1>
          </div>
          <ul>
            {listItem.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={item.path}>{item.item}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </StyledNav>
    </Conteiner>
  );
}

export default Navbar;
