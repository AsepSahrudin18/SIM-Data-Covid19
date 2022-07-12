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
          <p>
            Corona Virus Disease 2019 atau yang biasa disingkat COVID-19 adalah
            penyakit menular yang disebabkan oleh SARS-CoV-2, salah satu jenis
            koronavirus. Penderita COVID-19 dapat mengalami demam, batuk kering,
            dan kesulitan bernafas.
          </p>

          <Button>Vaccine</Button>
        </div>
        <div className="hero__right">
          <img src={assets} alt="placeholder" />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
