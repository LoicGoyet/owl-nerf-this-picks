import React from 'react';
import PropTypes from 'prop-types';

import {shapeColor} from '../utils';

const ValiantLogo = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 500 500"
  >
    <polygon
      fill={shapeColor(props.theme, '#e5d456')}
      points="439.52 84.12 324.53 190.45 250.25 150.34 176.33 190.75 60.7 85.08 35 44.2 68.33 153.16 76.22 164.53 111.91 200.78 113.5 202.76 84.15 195.48 96.9 236.55 100.66 240.15 138.35 270.25 139.41 271.43 111.72 269.19 135.54 304.89 137.65 306.5 160.59 320.66 164.59 326.24 170.71 349.04 177.22 359.86 221.18 423.42 222.54 424.97 239.54 435.66 241.85 436.89 233.54 416.06 179.14 280.44 176.78 264.15 177.68 264.15 230.18 275.07 231.9 277.74 233.19 293.79 245.69 327.41 250.75 342.52 255.74 327.39 268.07 293.7 269.27 277.64 270.98 274.97 323.42 263.78 324.33 263.77 322.05 280.08 268.34 415.97 260.14 436.85 262.43 435.6 279.38 424.82 280.73 423.27 324.37 359.49 330.82 348.63 336.82 325.8 340.8 320.21 363.67 305.92 365.77 304.3 389.41 268.48 361.73 270.86 362.78 269.68 400.33 239.39 404.07 235.77 416.61 194.63 387.3 202.06 388.88 200.08 424.38 163.65 432.22 152.24 465 43.11 439.52 84.12"
    />
  </svg>
);

export default ValiantLogo;

ValiantLogo.defaultProps = {
  width: 500,
  height: 500,
};

ValiantLogo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
