import styled from "styled-components";

const StyledHero = styled.div`
  section {
    display: flex;
    flex-direction: column;
  }

  .hero__left {
    margin-bottom: 1rem;
    text-align: center;
    margin: 1rem;
    margin-bottom: 2rem;
  }

  h2 {
    color: #0496ff;
    margin-bottom: 1rem;
    font-size: 3rem;
    font-weight: bold;
  }

  h3 {
    color: #118ab2;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  p {
    color: #64748b;
    text-align: justify;
  }
  .vertical_row {
    border-left: 8px solid #0496ff;
    height: auto;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 0px;
  }

  /* Medium Screen */
  @media screen and (min-width: 768px) {
    section {
      flex-direction: row;
      justify-content: space-between;
      .hero__left {
        flex-basis: 50%;
        text-align: left;
        padding-right: 2rem;
      }

      .hero__right {
        flex-basis: 50%;
        align-items: right;
        padding-left: 2rem;
        justify-content: center;
        display: flex;
        padding-top: 4rem;
        padding-bottom: 3rem;
      }
    }
  }

  /* Large Screen */
  @media screen and (min-width: 992px) {
    max-width: 1200px;
  }
`;
export default StyledHero;
