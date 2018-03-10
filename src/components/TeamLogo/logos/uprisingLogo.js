import React from 'react';
import PropTypes from 'prop-types';

import {shapeColor} from '../utils';

const UprisingLogo = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 500 500"
  >
    <path
      fill={shapeColor(props.theme, '#174b97')}
      d="M357,72.67V335.58l-102.39,60L149.56,334V105.29L141,99.08H267.32l9.6,8.67v28.86l-48.29,27.91V121.22H178.42V317.86l0,1.09L254.71,364l72.74-41.65V193.15L306.6,174.34l20.85-12.85v-76L295.32,56H76.13L97.94,72.7V361.3L254.69,456l153.17-92V56H337ZM277,208.19l.32,86.23-22.88,11.76L228.8,292.26V227.08l-6.68-1.57,45-27.19,9.9,9.31Z"
    />
  </svg>
);

export default UprisingLogo;

UprisingLogo.defaultProps = {
  width: 500,
  height: 500,
};

UprisingLogo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
