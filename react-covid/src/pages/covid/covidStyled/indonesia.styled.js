import styled from "styled-components";

const StyledInd = styled.div`
  /* Small Screen */

  h1 {
    color: #0496ff;
    margin-bottom: 1rem;
    font-size: 2.44rem;
    text-align: center;
    font-weight: bold;
  }

  h2 {
    text-align: center;
    color: #118ab2;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
  }

  /* Large Screen */
  @media screen and (min-width: 992px) {
    padding: 3rem;
    img {
      max-width: 100%;
      height: auto;
      border-radius: 50px;
    }
  }
`;
export default StyledInd;
