import GlobalData from "../Global/GlobalData";

import StyledGlobals from "./Globals.styled";

function GlobalsData(props) {
  const { title, globals } = props;

  return (
    <StyledGlobals>
      <h1>{title}</h1>
      <h2>Data Covid Berdasarkan {title}</h2>
      <div>
        {globals && (
          <GlobalData status="Confirmed" value={globals.confirmed.value} />
        )}
        {globals && (
          <GlobalData status="Recovered" value={globals.recovered.value} />
        )}
        {globals && <GlobalData status="Deaths" value={globals.deaths.value} />}
      </div>
    </StyledGlobals>
  );
}
export default GlobalsData;
