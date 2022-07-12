import styled from "styled-components";

const StyledNav = styled.div`
  /* Small Screen */
  background-color: #0496ff;
  padding: 1rem;
  color: #fff;

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
  nav {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 2rem;
    text-align: left;
    margin: 0 auto;
    font-weight: bold;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  div {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  li {
    margin-bottom: 0.3rem;
    font-size: 1rem;
    text-indent: 1rem;
    line-height: 2rem;
    text-align: left;
  }

  /* Medium Screen */
  @media screen and (min-width: 768px) {
    nav {
      flex-direction: row;
      align-items: center;
      margin: 0 auto;
      justify-content: space-between;
    }

    h1 {
      margin: 0;
    }

    ul {
      flex-direction: row;
      display: flex;
    }

    li {
      margin: 1rem;
    }
    /* Large Screen */
    @media screen and (min-width: 992px) {
      nav {
        margin-right: 2rem;
        margin-left: 2rem;
      }
    }
  }
`;
export default StyledNav;
