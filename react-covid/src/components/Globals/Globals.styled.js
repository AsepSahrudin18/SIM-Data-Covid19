import styled from "styled-components";

const StyledGlobals = styled.div`
  /* Small Screen */
  text-align: center;
  padding: 2rem;
  h1 {
    color: #0496ff;
    font-size: 3rem;
  }

  h2 {
    color: #118ab2;
    margin-bottom: 2rem;
  }

  div {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
    font-weight: bold;
    text-align: center;
  }
  /* Medium Screen */
  @media screen and (min-width: 768px) {
    div {
      flex-direction: row;
      height: auto;
    }
    h1 {
      font-size: 2rem;
    }
  }
`;
export default StyledGlobals;
