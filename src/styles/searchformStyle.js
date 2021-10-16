import styled from 'styled-components';

const SearchFormWrapper = styled.form`
  display: flex;
  position: relative;
  width: 30vw;
  /* min-width: 300px; */

  margin-bottom: 50px;
  overflow: hidden;
`;

const InputBox = styled.input`
  border: none;
  outline: none;
  color: black;
  background: white;
  width: 100%;
  height: 100%;
  padding: 14px 20px;
  font-size: 15px;
  border: ${({ theme }) => theme.searchFormBorder};
`;

const BtnWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 100%;
  z-index: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.converseColor};
  svg {
    color: ${({ theme }) => theme.sameColor};
  }

  &:hover {
    opacity: 0.5;
  }
`;

export { SearchFormWrapper, InputBox, BtnWrapper };
