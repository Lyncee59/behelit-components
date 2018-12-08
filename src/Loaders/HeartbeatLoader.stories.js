import React from 'react'
import { storiesOf } from '@storybook/react'

import HeartbeatLoader from './HeartbeatLoader'

storiesOf('Loaders/HeartbeatLoader', module)
  .add('default', () => <HeartbeatLoader />)
  .add('with size', () => <HeartbeatLoader size="100px" />)
