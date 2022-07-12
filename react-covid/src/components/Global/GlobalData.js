import StyledGdata from "./Global.styled";

function GlobalData(props) {
  const { status, value } = props;
  return (
    <StyledGdata>
      <section>
        <h2>{status}</h2>
        <h1>{value}</h1>
      </section>
    </StyledGdata>
  );
}

export default GlobalData;
