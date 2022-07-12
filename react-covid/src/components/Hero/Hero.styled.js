import styled from "styled-components";

const StyledHero = styled.div`
  section {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 1rem;
  }

  .hero__left {
    margin-bottom: 1rem;
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
    margin-bottom: 1rem;
    text-align: justify;
  }

  button {
    padding: 1rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #0496ff;
    color: #fff;
    font-weight: bold;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
  }
  button:hover {
    background-color: #118ab2;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 0px;
  }

  /* Medium Screen */
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }

  /* Large Screen */
  @media screen and (min-width: 992px) {
    max-width: 1200px;

    section {
      flex-direction: row;
      justify-content: space-between;
      margin-right: 4rem;
      margin-left: 4rem;
    }

    .hero__left {
      flex-basis: 40%;
      text-align: left;
    }

    .hero__right {
      flex-basis: 50%;
      align-items: right;
    }
  }
`;
export default StyledHero;
