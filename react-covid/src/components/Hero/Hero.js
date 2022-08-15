import assets from "../../Assets/images/health.png";
import Button from "../ui/Button";

import StyledHero from "./Hero.styled";

function Hero() {
  return (
    <StyledHero>
      <section>
        <div className="hero__left">
          <h2>Covid ID</h2>
          <h3>Monitor perkembangan covid</h3>
          <div className="vertical_row">
            <p>
              Coronavirus merupakan keluarga besar virus yang menyebabkan
              penyakit pada manusia dan hewan. Pada manusia biasanya menyebabkan
              penyakit infeksi saluran pernapasan, mulai flu biasa hingga
              penyakit yang serius seperti Middle East Respiratory Syndrome
              (MERS) dan Sindrom Pernafasan Akut Berat/ Severe Acute Respiratory
              Syndrome (SARS). Coronavirus jenis baru yang ditemukan pada
              manusia sejak kejadian luar biasa muncul di Wuhan Cina, pada
              Desember 2019, kemudian diberi nama Severe Acute Respiratory
              Syndrome Coronavirus 2 (SARS-COV2), dan menyebabkan penyakit
              Coronavirus Disease-2019 (COVID-19).
            </p>
          </div>
          <Button variant="primary">Vaccine</Button>
        </div>
        <div className="hero__right">
          <img src={assets} alt="placeholder" />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
