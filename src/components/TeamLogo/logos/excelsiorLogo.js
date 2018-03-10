import React from 'react';
import PropTypes from 'prop-types';

import {shapeColor} from '../utils';

const ExcelsiorLogo = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 500 500"
  >
    <polygon
      fill={shapeColor(props.theme, '#0f57ea')}
      points="271.44 250 373.89 147.54 331.02 147.54 250 228.56 168.98 147.54 126.11 147.54 228.56 250 126.11 352.45 168.98 352.45 250 271.44 331.02 352.45 373.89 352.45 271.44 250"
    />
    <polygon
      fill={shapeColor(props.theme, '#0f57ea')}
      points="357.18 250 438.2 168.98 438.2 147.54 416.76 147.54 314.31 250 416.76 352.45 438.2 352.45 438.2 331.02 357.18 250"
    />
    <polygon
      fill={shapeColor(props.theme, '#0f57ea')}
      points="400.05 250 438.2 288.15 438.2 211.85 400.05 250"
    />
    <polygon
      fill={shapeColor(props.theme, '#0f57ea')}
      points="83.24 147.54 61.8 147.54 61.8 168.98 142.82 250 61.8 331.02 61.8 352.45 83.24 352.45 185.69 250 83.24 147.54"
    />
    <polygon
      fill={shapeColor(props.theme, '#0f57ea')}
      points="61.8 211.85 61.8 288.15 99.95 250 61.8 211.85"
    />
    <polygon
      fill={shapeColor(props.theme, '#0f57ea')}
      points="211.85 352.45 288.15 352.45 250 314.31 211.85 352.45"
    />
    <polygon
      fill={shapeColor(props.theme, '#0f57ea')}
      points="288.15 147.54 211.85 147.54 250 185.69 288.15 147.54"
    />
  </svg>
);

export default ExcelsiorLogo;

ExcelsiorLogo.defaultProps = {
  width: 500,
  height: 500,
};

ExcelsiorLogo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
