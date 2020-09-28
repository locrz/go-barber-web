import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  hasDescription: boolean;
  type?: 'info' | 'error' | 'success';
}

const toastTypeVariantions = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 360px;
  position: relative;

  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  ${props => toastTypeVariantions[props.type || 'info']}

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;
    p {
      margin-top: 4px;
      font-size: 14px;
      line-height: 20px;
      opacity: 0.8;
    }
  }

  button {
    background: transparent;
    color: inherit;
    border: 0px;

    position: absolute;
    top: 20px;
    right: 16px;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg: {
        margin-top: 0;
      }
    `}
`;
