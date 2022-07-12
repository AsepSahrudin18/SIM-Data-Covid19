import styled from "styled-components";

const StyledAbout = styled.div`
  section {
    border-left: 2px #118ab2;
    height: max-content;
    display: inline-block;
    padding-left: 5px;
  }

  h2 {
    color: #0496ff;
    margin-bottom: 1rem;
    font-size: 3rem;
    font-weight: bold;
  }

  h4 {
    color: #118ab2;
    font-weight: bold;
  }

  button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #0496ff;
    color: #fff;
    font-weight: bold;
  }

  /* Large screen */
  @media screen and (min-width: 992px) {
    h2 {
      font-size: 3rem;
    }
    h4 {
      font-size: 1.59rem;
    }
  }
`;
export default StyledAbout;
