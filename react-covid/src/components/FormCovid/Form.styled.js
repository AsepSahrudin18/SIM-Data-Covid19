import styled from "styled-components";

const StyledForm = styled.div`
  /* Small Screen */
  margin: 5rem auto;
  padding: 1rem;

  .form__right {
    padding-right: 10px;
  }

  img {
    display: none;
  }

  h2 {
    color: #0496ff;
    margin-bottom: 0.8rem;
    font-size: 1.8rem;
    text-align: center;
  }

  h5 {
    text-align: center;
    color: #118ab2;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-left: 0.2rem;
  }

  select {
    background-color: white;
    margin-top: 0.4rem;
    width: 100%;
    padding: 10px 10px;
    border-radius: 10px;
    border-color: #0496ff;
  }

  input {
    padding: 10px 10px;
    border-radius: 10px;
    background-color: none;
    width: 92%;
    margin-top: 0.4rem;
    border-color: #0496ff;
    margin: 0 auto;
  }

  p {
    color: red;
  }

  button {
    background-color: #0496ff;
    color: white;
    padding: 10px 10px;
    border-radius: 10px;
    width: 100%;
    margin-top: 1rem;
    border: none;
    font-weight: bold;
  }

  button:hover {
    background-color: #118ab2;
  }
  /* Medium Screen */
  @media screen and (min-width: 768px) {
    margin-bottom: 5rem;

    img {
      max-width: 90%;
      height: auto;
      display: flex;
    }

    .form__left {
      flex-basis: 50%;
      align-items: center;
      display: flex;
    }

    .form__right {
      flex-basis: 50%;
    }

    section {
      display: flex;
      justify-content: space-between;
    }

    input {
      width: auto;
      margin: 0.2rem;
    }

    select {
      padding: 8px 8px;
      width: auto;
      margin: 0.3rem;
    }

    form {
      display: flex;
      flex-direction: column;
      max-width: 90%;
      margin: 0 auto;
    }

    label {
      margin-top: 0.5rem;
    }

    h2 {
      margin-bottom: 0.2rem;
    }

    /* Large Screen */
    @media screen and (min-width: 992px) {
      max-width: 100%;
      height: auto;
      border-radius: 0px;

      input {
        width: auto;
        margin: 0.2rem;
        max-width: auto;
        padding: 15px 15px;
      }

      select {
        padding: 15px 15px;
      }

      h2 {
        font-size: 2.8rem;
        margin-bottom: 1rem;
      }

      p {
        margin-left: 2.1rem;
        color: red;
      }

      img {
        margin-right: 1rem;
      }
    }
  }
`;
export default StyledForm;
