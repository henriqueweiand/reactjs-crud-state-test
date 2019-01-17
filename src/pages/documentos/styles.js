import styled, { css } from 'styled-components';
import { colors as colorsBase } from '~/styles';

export const ContainerArrayCSS = css`
  justify-content: center,
  align-items: center,
`;

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
`;

export const DocumentosTable = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  border-collapse: collapse;
  display: table;
  border-spacing: 2px;
  border-color: grey;

  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
    th {
      font-size: 11px;
      letter-spacing: 1.11px;
      font-weight: normal;
      vertical-align: bottom;
      border-bottom: 2px solid ${colorsBase.lighter};
      border-top: 1px solid ${colorsBase.lighter};
      padding: .75rem;
    }
  }

  tbody {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
  }

  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }

  td {
    padding: .75rem;
    vertical-align: top;
    border-top: 1px solid ${colorsBase.lighter};
    text-align: center;

    svg {
      cursor: pointer;
      margin-left: 10px;
      color: ${colorsBase.dark};

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
