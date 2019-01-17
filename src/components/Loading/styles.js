import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.span`
  height: ${props => `${props.children.props.height}px`};
  width: ${props => `${props.children.props.width}px`};
  animation: ${rotate360} 2s linear infinite;
`;
