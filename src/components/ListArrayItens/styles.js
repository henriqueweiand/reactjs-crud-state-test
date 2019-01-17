import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  ${props => (props.css.container ? css`${props.css.container}` : '')}
`;

export const Title = styled.div`
  font-size: 12px;

  ${props => (props.css.title ? css`${props.css.title}` : '')}
`;
