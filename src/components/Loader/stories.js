import React from 'react'
import { storiesOf } from '@storybook/react'

import Loader from './index'

storiesOf('Loader')
    .add('default', () => <Loader/>)
    .add('with sections explained', () => <Loader sections={['schedule', 'teams']}/>)
    .add('Full page', () => <Loader sections={['schedule', 'teams']} fullPage/>)
