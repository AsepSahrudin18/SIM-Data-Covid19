import styled from "styled-components";

const Button = styled.button`
  button {
    background-color: #0496ff;
    color: white;
    padding: 10px 10px;
    border-radius: 10px;
    width: 100%;
    margin-top: 1rem;
    border: none;
    font-weight: bold;
  }

  button:hover {
    background-color: #118ab2;
  }

  /* medium screen */
  @media screen and (min-width: 768px) {
    button {
      padding: 8px 8px;
      width: auto;
    }
  }

  /* large screen */
  @media screen and (min-width: 992px) {
    button {
      padding: 15px 15px;
    }
  }
`;

export default Button;
