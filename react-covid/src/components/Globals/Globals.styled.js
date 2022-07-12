import styled from "styled-components";

const StyledGlobals = styled.div`
  /* Small Screen */

  h1 {
    color: #0496ff;
    margin-bottom: 1rem;
    font-size: 3rem;
    text-align: center;
  }

  h2 {
    text-align: center;
    color: #118ab2;
  }

  div {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
    font-weight: bold;
  }
  /* Medium Screen */
  @media screen and (min-width: 768px) {
    div {
      flex-direction: row;
    }
  }
`;
export default StyledGlobals;
