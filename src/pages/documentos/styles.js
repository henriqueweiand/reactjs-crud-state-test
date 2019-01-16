import styled from 'styled-components';

export const DocumentosTable = styled.table`
  width: 100%;
  text-align: left;
  margin-top: 20px;
  thead th {
    font-size: 11px;
    color: #b3b3b3;
    letter-spacing: 1.11px;
    font-weight: normal;
    text-transform: uppercase;
    padding: 5px 10px;
    &:last-child {
      text-align: right;
    }
  }
`;

export const DocumentosItem = styled.tr`
  td {
    border-top: 1px solid #282828;
    font-size: 13px;
    padding: 0 10px;
    line-height: 40px;
    &:first-child {
      width: 80px;
      text-align: right;
    }
    &:last-child {
      text-align: right;
    }
  }
  &:hover td {
    background: #282828;
  }
`;
