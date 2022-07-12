import StyledContainer from "./Container.sytled";

function Container(props) {
  return <StyledContainer>{props.children}</StyledContainer>;
}

export default Container;
