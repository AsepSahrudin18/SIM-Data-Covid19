import styled from "styled-components";

const StyledForm = styled.section`
  /* Small screen */
  h2 {
    color: #0496ff;
    margin-bottom: 0.8rem;
    font-size: 1.8rem;
    text-align: center;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-left: 0.2rem;
  }

  select {
    width: 100%;
    padding: 12px 20px;
    margin-bottom: 1rem;
    border-radius: 10px;
    margin-top: 10px;
    background-color: white;
    border-color: #0496ff;
    appearance: none;
  }

  input {
    width: 100%;
    padding: 12px 20px;
    margin-bottom: 1rem;
    border-radius: 10px;
    border-color: #0496ff;
    margin-top: 10px;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  img {
    display: none;
  }

  /* Medium screen */
  @media screen and (min-width: 768px) {
    section {
      flex-direction: row;
      justify-content: space-between;
      display: flex;
    }

    img {
      display: flex;
      max-width: 100%;
      height: auto;
    }

    .form__left {
      flex-basis: 50%;
      display: flex;
      padding: 1rem;
    }

    .form__right {
      flex-basis: 50%;
      padding: 1rem;
    }
  }
  /* Large screen */
  .form__left {
    display: flex;
    padding: 3rem;
  }

  .form__right {
    padding: 3rem;
  }
`;
export default StyledForm;
