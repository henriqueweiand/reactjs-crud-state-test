import styled, { css } from 'styled-components';
import { colors as colorsBase } from '~/styles';

export const ContainerArrayCSS = css`
  padding: .5rem;
  background: ${colorsBase.lighter};
  justify-content: space-between;
  align-items: center;
  margin-top: .7rem;
  border-left: 3px solid ${colorsBase.primary}
`;

export const TitleArrayCSS = css`
  font-size: 1rem;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  padding: .75rem;
`;
