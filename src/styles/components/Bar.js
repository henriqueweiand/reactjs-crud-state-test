import styled from 'styled-components';
import { colors as colorsBase } from '~/styles';

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colorsBase.primary};
  padding: .75rem;
`;

export default Bar;
