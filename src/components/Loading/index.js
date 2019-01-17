import React from 'react';
import PropTypes from 'prop-types';

import { FaSpinner } from 'react-icons/fa';
import { Spinner } from './styles';

const Loading = ({ width, height }) => (
  <Spinner>
    <FaSpinner width={width} height={height} />
  </Spinner>
);

Loading.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

Loading.defaultProps = {
  width: 20,
  height: 20,
};

export default Loading;
