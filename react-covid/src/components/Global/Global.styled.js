import styled from "styled-components";

const StyledGdata = styled.div`
  section {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 15rem;
    height: auto;
    border-radius: 15px;
    margin: 0.5rem;
    padding: 1rem;
  }

  h2 {
    color: #0496ff;
  }

  h1 {
    color: #0496ff;
  }

  /* Medium Screen */
  @media screen and (min-width: 768px) {
    section {
      width: 12rem;
    }
  }

  /* Large Screen */
  @media screen and (min-width: 992px) {
    section {
      width: 18rem;
      height: auto;
    }
  }
`;
export default StyledGdata;
