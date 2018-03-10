import React from 'react';
import {storiesOf} from '@storybook/react';

import TeamLogo from './index';

storiesOf('TeamLogo').add('default', () => (
  <React.Fragment>
    <TeamLogo theme="color" team="dragons" width={75} height={75} />
    <TeamLogo theme="white" team="dragons" width={75} height={75} />
    <TeamLogo theme="disabled" team="dragons" width={75} height={75} />
    <TeamLogo theme="color" team="dynasty" width={75} height={75} />
    <TeamLogo theme="white" team="dynasty" width={75} height={75} />
    <TeamLogo theme="disabled" team="dynasty" width={75} height={75} />
    <TeamLogo theme="color" team="excelsior" width={75} height={75} />
    <TeamLogo theme="white" team="excelsior" width={75} height={75} />
    <TeamLogo theme="disabled" team="excelsior" width={75} height={75} />
    <TeamLogo theme="color" team="fuel" width={75} height={75} />
    <TeamLogo theme="white" team="fuel" width={75} height={75} />
    <TeamLogo theme="disabled" team="fuel" width={75} height={75} />
    <TeamLogo theme="color" team="fusion" width={75} height={75} />
    <TeamLogo theme="white" team="fusion" width={75} height={75} />
    <TeamLogo theme="disabled" team="fusion" width={75} height={75} />
    <TeamLogo theme="color" team="gladiators" width={75} height={75} />
    <TeamLogo theme="white" team="gladiators" width={75} height={75} />
    <TeamLogo theme="disabled" team="gladiators" width={75} height={75} />
    <TeamLogo theme="color" team="mayhem" width={75} height={75} />
    <TeamLogo theme="white" team="mayhem" width={75} height={75} />
    <TeamLogo theme="disabled" team="mayhem" width={75} height={75} />
    <TeamLogo theme="color" team="outlaws" width={75} height={75} />
    <TeamLogo theme="white" team="outlaws" width={75} height={75} />
    <TeamLogo theme="disabled" team="outlaws" width={75} height={75} />
    <TeamLogo theme="color" team="shock" width={75} height={75} />
    <TeamLogo theme="white" team="shock" width={75} height={75} />
    <TeamLogo theme="disabled" team="shock" width={75} height={75} />
    <TeamLogo theme="color" team="spitfire" width={75} height={75} />
    <TeamLogo theme="white" team="spitfire" width={75} height={75} />
    <TeamLogo theme="disabled" team="spitfire" width={75} height={75} />
    <TeamLogo theme="color" team="uprising" width={75} height={75} />
    <TeamLogo theme="white" team="uprising" width={75} height={75} />
    <TeamLogo theme="disabled" team="uprising" width={75} height={75} />
    <TeamLogo theme="color" team="valiant" width={75} height={75} />
    <TeamLogo theme="white" team="valiant" width={75} height={75} />
    <TeamLogo theme="disabled" team="valiant" width={75} height={75} />
  </React.Fragment>
));
