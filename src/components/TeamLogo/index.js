import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DragonsLogo from './logos/dragonsLogo';
import DynastyLogo from './logos/dynastyLogo';
import ExcelsiorLogo from './logos/excelsiorLogo';
import FuelLogo from './logos/fuelLogo';
import FusionLogo from './logos/fusionLogo';
import GladiatorsLogo from './logos/gladiatorsLogo';
import MayhemLogo from './logos/mayhemLogo';
import OutlawsLogo from './logos/outlawsLogo';
import ShockLogo from './logos/shockLogo';
import SpitfireLogo from './logos/spitfireLogo';
import UprisingLogo from './logos/uprisingLogo';
import ValiantLogo from './logos/valiantLogo';

const TeamLogo = props => {
  let Logo;
  switch (props.team) {
    case 4408:
    case 'dragons':
      Logo = DragonsLogo;
      break;
    case 4409:
    case 'dynasty':
      Logo = DynastyLogo;
      break;
    case 4403:
    case 'excelsior':
      Logo = ExcelsiorLogo;
      break;
    case 4523:
    case 'fuel':
      Logo = FuelLogo;
      break;
    case 4524:
    case 'fusion':
      Logo = FusionLogo;
      break;
    case 4406:
    case 'gladiators':
      Logo = GladiatorsLogo;
      break;
    case 4407:
    case 'mayhem':
      Logo = MayhemLogo;
      break;
    case 4525:
    case 'outlaws':
      Logo = OutlawsLogo;
      break;
    case 4404:
    case 'shock':
      Logo = ShockLogo;
      break;
    case 4410:
    case 'spitfire':
      Logo = SpitfireLogo;
      break;
    case 4402:
    case 'uprising':
      Logo = UprisingLogo;
      break;
    case 4405:
    case 'valiant':
      Logo = ValiantLogo;
      break;
  }

  return <Logo width={props.width} height={props.height} theme={props.theme} />;
};

export default TeamLogo;

TeamLogo.defaultProps = {
  width: 500,
  height: 500,
  team: 'fusion',
  theme: 'color',
};

TeamLogo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  team: PropTypes.oneOf([
    4408,
    'dragons',
    4409,
    'dynasty',
    4403,
    'excelsior',
    4523,
    'fuel',
    4524,
    'fusion',
    4406,
    'gladiators',
    4407,
    'mayhem',
    4525,
    'outlaws',
    4404,
    'shock',
    4410,
    'spitfire',
    4402,
    'uprising',
    4405,
    'valiant',
  ]),
  theme: PropTypes.oneOf(['color', 'white', 'disabled']),
};
