import styled from 'styled-components';

export const FormStyled = styled.form`
  margin: 40px 16px;
  .btn-container {
    display: flex;
    justify-content: flex-end;
    margin: 40px 0;
    button {
      background-color: #007bff;
      color: #FFF;
      font-size: 1rem;
      font-weight: 500;
      border-radius:5px;
      padding: 14px 32px;
      transition: all 0.8s;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .message {
    background-color: #ececec;
    color: #3e3e3e;
    padding: 16px;
  }
  @media (min-width: 775px) {
    margin: 40px 50px;
  }
  @media (min-width: 992px) {
    width: 35%;
  }
`