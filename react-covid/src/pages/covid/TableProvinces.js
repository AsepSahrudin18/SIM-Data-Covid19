import { useState } from "react";
import FormCovid from "../../components/FormCovid/FormCovid";
import Hero from "../../components/Hero/Hero";
import ProvincesData from "../../components/ProvincesData/ProvincesData";
import data from "../../utils/constants/provinces";

function TableProvinces() {
  const [provs, setProvs] = useState(data.provinces);
  return (
    <>
      <Hero />
      <ProvincesData provs={provs} />
      <FormCovid provs={provs} setProvs={setProvs} />
    </>
  );
}

export default TableProvinces;
