import React from 'react'
import { storiesOf } from '@storybook/react'

import FinalBoxScore from './index'

storiesOf('FinalBoxScore')
    .add('default', () => <FinalBoxScore scores={{althi: 35, logo: 99}}/>)
    .add('equal scores', () => <FinalBoxScore scores={{althi: 100, logo: 100}}/>)
