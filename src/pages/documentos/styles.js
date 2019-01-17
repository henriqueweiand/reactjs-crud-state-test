import styled from 'styled-components';

export const DocumentosTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: left;
  display: table;
  border-spacing: 2px;
  border-color: grey;
  background-color: transparent;

  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
    th {
      font-size: 11px;
      letter-spacing: 1.11px;
      font-weight: normal;
      vertical-align: bottom;
      border-bottom: 2px solid #dee2e6;
      border-top: 1px solid #dee2e6;
      padding: .75rem;
    }
  }

  tbody {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
  }
`;

export const DocumentosItem = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  td {
    padding: .75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
  }
`;
