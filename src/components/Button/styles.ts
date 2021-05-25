import styled from 'styled-components';
import { shade } from 'polished';
import { colors } from '../../styles/colors';

export const Container = styled.button`
  background: ${colors.main};
  height: 56px;
  width: 100%;
  padding: 0 16px;
  border-radius: 10px;
  border: 0;
  color: ${colors.background};
  font-weight: 500;
  margin-top: 24px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, colors.main)};
  }
`;
