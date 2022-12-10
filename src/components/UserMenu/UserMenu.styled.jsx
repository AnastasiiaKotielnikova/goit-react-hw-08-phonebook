import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  p {
    text-align: center;
    font-size: 18px;
    color: grey;
    margin-top: 7px;
    margin-right: 10px;
  }
`;

export const StyledBtn = styled.button`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 18px;
  color: #ffffff;
  outline: none;
  text-decoration: none;
  border: none;
  font: inherit;
  cursor: pointer;
  margin-left: auto;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: #3f51b5;
  &:hover,
  &:focus {
    background-color: #303f9f;
  }
  &.active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
