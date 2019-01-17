import styled from 'styled-components';
import { colors as colorsBase } from '~/styles';

export const Container = styled.div`
  padding: .5rem 0;

  &:first-child {
    padding-top: 0
  }
`;

export const Title = styled.div`
  display: inline-block;
  margin-bottom: .5rem;
  color: ${colorsBase.default};
  font-size: .8rem
`;
