import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  width: 100%;
  padding: 16px;
  border-radius: 10px;

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: ${colors.danger};
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: ${colors.main};
      color: ${colors.main};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${colors.main};
    `}

  input {
    background: transparent;
    color: #f4ede8;
    border: 0;
    flex: 1;
  }

  svg {
    margin-right: 16px;
  }
`;

export const ErrorTooltip = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0px;
  }

  span {
    background-color: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
