import styled from 'styled-components';
import { DEVICE } from '../constants/device';

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 300px;
  height: 300px;

  @media ${DEVICE.TABLET} {
    width: 250px;
    height: 250px;
  }
`;

const Title = styled.h2`
  margin-top: 15px;
  font-size: 1rem;
  font-weight: 600;

  @media ${DEVICE.TABLET} {
    font-size: 0.8rem;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 10px;
  outline: none;
  border: none;
  background: #1f3e5a;
  color: white;
  font-size: 1rem;

  @media ${DEVICE.TABLET} {
    padding: 5px 15px;
    font-size: 0.8rem;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export { Background, Container, Img, Title, Button };
