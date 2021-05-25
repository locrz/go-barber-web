import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: ${colors.main};
    padding: 8px;
    border-radius: 4px;

    font-size: 12px;
    font-weight: 500;
    color: #312e38;

    position: absolute;
    bottom: calc(100% + 12px);

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;

    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';
      border-style: solid;
      border-color: ${colors.main} transparent;
      border-width: 6px 6px 0px 6px;

      position: absolute;
      top: 100%;

      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
