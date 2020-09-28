import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import imageBackground from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromRight = keyframes`
  from {
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  animation: ${appearFromRight} 1s;

  form {
    width: 340px;
    margin: 80px 0;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      display: block;
      color: #f4ede8;
      text-decoration: none;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#F4EDE8')};
      }
    }
  }

  > a {
    display: block;
    color: #ff9000;
    text-decoration: none;
    margin-top: 24px;
    transition: color 0.2s;
    font-weight: 500;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 12px;
    }
  }
`;
export const Background = styled.div`
  flex: 1;

  background: url(${imageBackground}) no-repeat center;
  background-size: cover;
`;
