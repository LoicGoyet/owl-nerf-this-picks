import {keyframes} from 'styled-components'

const spinner = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const lineFiller1 = keyframes`
  0% {
    right: 0;
    left: 0;
  }

  50% {
    right: 100%;
    left: 0;
  }

  100% {
    right: 100%;
    left: 0;
  }
`

const lineFiller2 = keyframes`
  0% {
    right: 0;
    left: 100%;
  }

  50% {
    right: 0;
    left: 0;
  }

  100% {
    right: calc(100% - 0.4rem);
    left: 0;
  }
`

export const animations = {
  spinner,
  lineFiller1,
  lineFiller2,
}