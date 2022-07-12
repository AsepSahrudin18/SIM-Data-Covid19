import styled from "styled-components";

const StyledFooter = styled.div`
  /* Small Screen */
  background-color: #0496ff;
  padding: 1rem;
  color: #fff;

  a {
    text-decoration: none;
    color: #fff;
  }

  nav {
    margin: 1rem;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }

  h1 {
    font-size: 2rem;
    text-align: left;
    margin: auto;
    font-weight: bold;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: auto;
  }

  li {
    margin-bottom: 0.3rem;
    font-size: 1rem;
    line-height: 2rem;
    text-align: right;
  }

  /* Medium Screen */
  @media screen and (min-width: 768px) {
    nav {
      margin: 0 auto;
    }

    ul {
      flex-direction: row;
    }

    li {
      margin: 0 1rem;
    }
  }

  /* Large Screen */
  @media screen and (min-width: 992px) {
    nav {
      margin-right: 3rem;
      margin-left: 3rem;
    }
  }
`;
export default StyledFooter;
