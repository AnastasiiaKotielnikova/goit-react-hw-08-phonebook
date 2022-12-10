import styled from '@emotion/styled';

export const Form = styled.form`
  flex-direction: column;
  height: 120px;
  padding: 10px;
  margin-bottom: 40px;
  display: flex;
`;

export const LogWrapper = styled.div`
  height: 400px;
  padding: 20px;
  border: 1px solid grey;
  border-radius: 4px;
  background-color: grey;
  margin-top: 20px;
`;

export const LogTitle = styled.h1`
  margin-bottom: 6px;
  font-size: 28px;
  text-align: center;
  color: blue;
`;

export const FormLabel = styled.label`
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 500px;
  font-size: 16px;
  line-height: 1.16;
  letter-spacing: 0.01em;
`;

export const FormInput = styled.input`
  display: block;
  margin: 0;
  padding: 10px 42px;
  font: inherit;
  font-size: 18px;
  outline: none;
  border-radius: 4px;
  border: 1px solid rgba(45, 18, 18, 0.2);
  color: blue;
`;

export const SubmitBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  width: 120px;
  padding: 10px;
  border-radius: 4px;
  color: white;
  border: none;
  background: blue;
  &:hover,
  &:focus {
    transform: scale(1.1);
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
  }
`;
