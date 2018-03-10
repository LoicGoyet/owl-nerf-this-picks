import React from 'react';
import PropTypes from 'prop-types';

import {shapeColor} from '../utils';

const FuelLogo = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 500 500"
  >
    <path
      fill={shapeColor(props.theme, '#0072ce')}
      d="M374.65,306.53c-32.6,57.58-57.37,45.72-63.71,40.24-1-.9-1.93-1.86-1.93-1.86-9.69-12.08-1-29.81,9.55-42.06,60.24-69.85,34-168.76,34-168.76-9.11,51-17,37.06-17,37.06-1.21-2.63,1.2-19.65,1.2-19.65-22.33,50.6-62.32,65.71-79.21,73.27-55.5,24.82-50.81,69.13-50.81,69.13,18.34-40.41,59.63-50.46,59.63-50.46-20.75,15.71-17.08,53.61-19,91.45C242.72,429.17,163.14,465,163.14,465,385.84,430.22,374.65,306.53,374.65,306.53Z"
    />
    <path
      fill={shapeColor(props.theme, '#0072ce')}
      d="M248.68,213.53c127.77-49.36,78-198.53,78-198.53C311.44,98.81,265.18,121.94,228,138.49c-154.82,68.9-85.08,203.85-85.08,203.85C133.16,251.93,240.55,216.67,248.68,213.53Z"
    />
  </svg>
);

export default FuelLogo;

FuelLogo.defaultProps = {
  width: 500,
  height: 500,
};

FuelLogo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
