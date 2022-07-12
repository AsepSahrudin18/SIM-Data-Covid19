import styled from "styled-components";

const StyledGdata = styled.div`
  section {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 18rem;
    height: 15rem;
    border-radius: 15px;
    margin: 1rem;
  }

  h2 {
    color: #0496ff;
  }

  h1 {
    color: #0496ff;
    margin: 0 auto;
  }

  /* Medium Screen */
  @media screen and (min-width: 768px) {
    section {
      width: 15rem;
      height: 10rem;
      margin: 0.5rem;
    }
  }

  /* Large Screen */
  @media screen and (min-width: 992px) {
    section {
      width: 20rem;
      height: 12rem;
      margin: 0.7rem;
    }
    h2 {
      margin-bottom: 2rem;
    }

    h2 {
      margin-bottom: 3rem;
    }
  }
`;
export default StyledGdata;
