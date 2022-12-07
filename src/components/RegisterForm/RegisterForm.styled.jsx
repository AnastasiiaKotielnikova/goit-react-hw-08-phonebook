import styled from '@emotion/styled';

export const FormRegister = styled.form`
  display: block;
  align-items: center;
  gap: 8px;
  padding: 4px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
  width: 500px;
`;

export const LabelRegister = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const BtnRegister = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  margin-left: auto;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: #3f51b5;
  color: #fff;
  &hover,
  &focus {
    background-color: #303f9f;
  }
  &active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
