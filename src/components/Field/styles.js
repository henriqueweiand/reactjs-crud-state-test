import styled, { css } from 'styled-components';
import { colors as colorsBase } from '~/styles';

export const Container = styled.div`
  padding: .5rem 0;

  input, select {
    ${props => (props.error ? css`
      border: 1px solid ${colorsBase.danger};
    ` : '')}
  }

  &:first-child {
    padding-top: 0
  }
`;

export const Error = styled.div`
  background: ${colorsBase.danger};
  color: ${colorsBase.dark};
  padding: .3rem;
  font-size: .8rem;

  ${props => (props.error ? css`
      display: block;
  ` : css`
      display: none;
  `)}
`;

export const Title = styled.div`
  display: inline-block;
  margin-bottom: .5rem;
  color: ${colorsBase.default};
  font-size: .8rem
`;
