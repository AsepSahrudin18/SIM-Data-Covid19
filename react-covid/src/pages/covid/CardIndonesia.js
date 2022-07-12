import axios from "axios";
import { useEffect, useState } from "react";
import GlobalsData from "../../components/Globals/GlobalsData";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import StyledInd from "./covidStyled/indonesia.styled";

function CardIndonesia() {
  const [covids, setCovids] = useState();

  useEffect(async () => {
    // akses API melalui axios
    const response = await axios(ENDPOINTS.INDONESIA);

    // simpan data ke state covid
    setCovids(response.data);
  }, []);

  return (
    <>
      <Hero />
      <GlobalsData globals={covids} title="Indonesia" />
      <StyledInd>
        <h1>Summary</h1>
        <h2>Data Covid Berdasarkan indonesia</h2>
        <img src={ENDPOINTS.INDPOSTER} alt="placeholSder" />
      </StyledInd>
    </>
  );
}

export default CardIndonesia;
