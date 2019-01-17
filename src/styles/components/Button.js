import styled, { css } from 'styled-components';
import { colors as colorsBase } from '~/styles';

const sizes = {
  default: css`
    height: 36px;
    font-size: 14px;
  `,
  small: css`
    height: 28px;
    font-size: 12px;
  `,
  big: css`
    height: 44px;
    font-size: 18px;
  `,
};

const colors = {
  white: css`
    border-color: ${colorsBase.light};
    color: ${colorsBase.light};

    &:hover {
      border-color: ${colorsBase.light};
      color: ${colorsBase.light};
    }
  `,
  default: css`
    border-color: ${colorsBase.default};
    color: ${colorsBase.default};

    &:hover {
      border-color: ${colorsBase.dark};
      color: ${colorsBase.dark};
    }
  `,
};

const Button = styled.button.attrs({
  type: 'button',
})`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  border-radius: .25rem;
  background-color: transparent;

  ${props => sizes[props.size || 'default']}
  ${props => colors[props.color || 'default']}
`;

export default Button;
