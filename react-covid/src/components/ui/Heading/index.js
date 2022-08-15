import styled from "styled-components";

const Heading = styled.h1`
  color: ${function ({ variant }) {
    if (variant === "confirmed") {
      return "#FEDB39";
    } else if (variant === "recovered") {
      return "#7DCE13";
    } else {
      return "#FF1E00";
    }
  }};
`;
export default Heading;
