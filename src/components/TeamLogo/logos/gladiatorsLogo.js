import React from 'react';
import PropTypes from 'prop-types';

import {shapeColor, shapeBackground} from '../utils';

const GladiatorsLogo = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 500 500"
  >
    <path
      fill={shapeColor(props.theme, '#381460')}
      d="M133.21,83l17.72,2.81c2-.12,1.38-1.5,1.38-1.5v-13A205.5,205.5,0,0,1,250,46.78c113.22,0,205,91,205,203.22a201.58,201.58,0,0,1-55.6,139.15l-12.85-13.3s-18-15.41-35.92-29.76l24.78,33.19s10.26,13.16,13.3,20.34A206.27,206.27,0,0,1,100,388.48V368.19a3.08,3.08,0,0,0-1.19-1.88L76.2,346.41a2.8,2.8,0,0,0-2.38,0L70.36,348A200.93,200.93,0,0,1,45,250C45,180.79,79.9,119.65,133.21,83Z"
    />
    <path
      fill={shapeBackground(props.theme, '#fff')}
      d="M174.77,89.51c78-36,168.4-10.44,218.2,56.3C343.55,83.5,252.21,62.05,177.92,96.33,102.63,131.08,59.06,216.48,76.2,295.4,56.12,213.24,95.73,126,174.77,89.51Z"
    />
    <path
      fill={shapeBackground(props.theme, '#fff')}
      d="M426.58,235.55a181,181,0,0,1-48.64,133l-4.83-4C407.2,330.62,427.84,284,426.58,235.55Z"
    />
    <path
      fill={shapeBackground(props.theme, '#fff')}
      d="M289.47,412.12A180.6,180.6,0,0,0,368,369.4l3.93,5.26a177.09,177.09,0,0,1-80.66,44.76c-83.4,20.8-167.39-21.19-203.85-96.06C124.36,393.8,210.09,431.92,289.47,412.12Z"
    />
    <path
      fill={shapeBackground(props.theme, '#fff')}
      d="M396.73,178.16l-12.35.06c-15.4-6.89-32.9-8.7-32.9-8.7a10,10,0,0,1,.86-3.25,3.21,3.21,0,0,0-.29-3.54,51.17,51.17,0,0,0-27.94-11.14c-2.09-5.7-7.22-17-7.22-17a10.79,10.79,0,0,0-6.27-6.94c-10.83-6.68-36-12.61-43.5-14.2s-24-2.48-24-2.48c-13.95.09-32.2,0-32.2,0a65.13,65.13,0,0,1-33.34-7.28l.09,2.37a191.11,191.11,0,0,0,8.26,18.46c-27.32,43.64-1.17,85.62-1.17,85.62-41.48-43-13.31-78.5-13.31-78.5C141.1,141.75,120.24,179,120.24,179a26.1,26.1,0,0,1-3.87,5.92c-.71.8-9.57,9.68-9.57,9.68-5.76,7.64-21.53,12.75-21.53,12.75a32.31,32.31,0,0,0,25.56,9.31c-3.1,17.25-.87,36.73-.87,36.73,7.69,46,24.86,52.42,24.86,52.42l22.54,4.8c63.64,22.54,78.48,43.59,78.48,43.59-2.12-20.83-14.9-35.41-31.66-47.77a149.93,149.93,0,0,1-35.94-38.33s22.44,19.43,41.58,29.71c66,35.42,45.23,77.88,45.23,77.88C250.56,389,236,400,236,400c22.39,0,35.3-6.89,35.3-6.89,24.49-12.63,32.28-25.8,32.28-25.8-2.26-26.67-26.35-90.79-26.71-91.87-1.53-4.5-10.53-24.65-10.53-24.65,17.2-1.2,23.81,3.14,23.81,3.14a30.2,30.2,0,0,1,.37,13.49c-1.18,4.8-4.92,10.75-4.92,10.75s6-1,10-.06c26,6.19,27.3,26.2,27.3,26.2-4.25,6.33-13.68,10.6-13.68,10.6A57.08,57.08,0,0,0,324,318.61l11.57-4.74c12.15-5.58,21.39-18.17,21.39-18.17a2.12,2.12,0,0,0,.47-2c-5.78-11,1.93-23.67,1.93-23.67l-.69-9.85-.72-.24a17.56,17.56,0,0,1-9.21,10c-3.37,1-8.56,0-8.56,0-11.93-3.63-15.18-7.52-15.18-7.52-4.67-10.9-3.24-15.18-3.24-15.18a55.9,55.9,0,0,1,29.59-31.32c2.92-.57,4,.57,4,.57,11.94,12.27,18.53,10.89,18.53,10.89.57-.57.89,0,.89,0,.73,1.79-.49,10.48-.49,10.48,11.7-7.15,19.5-30.75,19.5-30.75.91-3.1,0-3.64,0-3.64-5.28-7.47-17.31-18.4-17.31-18.4a85.26,85.26,0,0,1,18.8,9.74C396.36,190.27,396.73,178.16,396.73,178.16Zm-143-36.8s-11.5-8.48-30.46-9.32c0,0-2.48-.12-2.48,1.88,0,0-.61,12.47,2.06,22.52,0,0,.06,1.63,3.27,3.51l15.26,11.14s1.94.85,2.79,6.78l10.69,49.82s-14.26-34.62-24.66-50.37c0,0-9.92-5.81-14.5-10.5,0,0-8.57-19.72-3.29-45.19,0,0,.15-1.28,3.3-.85,0,0,7.69-2,36.63,13.62,0,0,21.8-.36,32.88,4.6C285.25,139,261.4,138.94,253.77,141.36Zm61.56,33.28,18.49-2.9s4.9-1.78,5.12,2.45l-.45,6.91,3.79,5.79Z"
    />
  </svg>
);

export default GladiatorsLogo;

GladiatorsLogo.defaultProps = {
  width: 500,
  height: 500,
};

GladiatorsLogo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
