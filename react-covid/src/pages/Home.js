import axios from "axios";
import { useEffect, useState } from "react";
import GlobalsData from "../components/Globals/GlobalsData";
import Hero from "../components/Hero/Hero";
import ENDPOINTS from "../utils/constants/endpoints";
import StyledInd from "./covid/covidStyled/indonesia.styled";

function Home() {
  const [globals, setGlobals] = useState();

  useEffect(async () => {
    // akses API melalui axios
    const response = await axios(ENDPOINTS.GLOBALS);

    // simpan data ke state covid

    setGlobals(response.data);
  }, []);
  console.log(globals);

  return (
    <>
      <Hero />
      <GlobalsData globals={globals} title="Global" />

      <StyledInd>
        <h1>Summary</h1>
        <h2>Data Covid Berdasarkan Globals</h2>
        <img src={ENDPOINTS.GPOSTER} alt="placeholder" />
      </StyledInd>
    </>
  );
}

export default Home;
