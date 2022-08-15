import styled, { css } from "styled-components";

const Button = styled.button`
  color: #fff;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;

  /** 
  * Mengirimkan props ke komponen
  * props diakses melalui anonymous function
  */

  background-color: ${function (props) {
    if (props.variant === "primary") {
      return "#0496ff";
    } else if (props.variant === "secondary") {
      return "red";
    } else {
      return "#4361ee";
    }
  }};

  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}
`;
export default Button;
