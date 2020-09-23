import styled from 'styled-components';
import { shade } from 'polished';

import imageBackground from '../../assets/sign-in-background.png';

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

  form {
    width: 340px;
    margin: 80px 0;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #232129;
      width: 100%;
      padding: 16px;
      border-radius: 10px;
      border: 2px solid #232129;
      color: #F4EDE8;

      & + input {
        margin-top: 8px;
      }

      &::placeholder {
        color: #F4EDE8;
      }
    }

    button {
      background: #ff9000;
      height: 56px;
      width: 100%;
      padding: 0 16px;
      border-radius: 10px;
      border: 0;
      color: #312e38;
      font-weight: 500;
      margin-top: 24px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      display: block;
      color: #F4EDE8;
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
