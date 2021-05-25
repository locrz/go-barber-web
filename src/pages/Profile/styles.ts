import styled from 'styled-components';
import { shade } from 'polished';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  > header {
    height: 144px;
    background: #28262e;

    display: flex;
    align-items: center;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        color: ${colors.text_secondary};
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -174px auto 0;

  width: 100%;

  form {
    width: 340px;
    margin: 80px 0;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }
  }

  > a {
    display: block;
    color: ${colors.main};
    text-decoration: none;
    margin-top: 24px;
    transition: color 0.2s;
    font-weight: 500;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      color: ${shade(0.2, colors.main)};
    }

    svg {
      margin-right: 12px;
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;

  align-self: center;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: ${colors.main};
    border-radius: 50%;
    bottom: 0;
    right: 0;
    border: 0;
    transition: background-color 0.2s;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background-color: ${shade(0.2, colors.main)};
    }
  }
`;
