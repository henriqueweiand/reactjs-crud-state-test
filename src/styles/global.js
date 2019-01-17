import { createGlobalStyle } from 'styled-components';
import { colors as colorsBase } from '~/styles';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Montserrat', sans-serif;
  }
  input, select {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: ${colorsBase.dark};
    background-color: #fff;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-clip: padding-box;
    border: 1px solid ${colorsBase.lighter};
  }
  button {
    cursor: pointer;
  }
  a {
    cursor: pointer;
  }
  .table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
  }
`;

export default GlobalStyle;
