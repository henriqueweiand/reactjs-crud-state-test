import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  ${props => (props.rootCSS ? css`${props.rootCSS}` : '')}
`;

export const Title = styled.div`
  font-size: 12px
`;
