import styled from 'styled-components';

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  label {
    font-size: 0.875rem;
    color: #424242;
    margin-bottom: 7px;
  }
  select {
    padding: 5px;
    font-size: 1rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border: 1px solid #d6d6d6;
  }
`