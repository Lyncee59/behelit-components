import React from 'react'
import { storiesOf } from '@storybook/react'

import FlatLoader from './FlatLoader'

storiesOf('Loaders/FlatLoader', module)
  .add('default', () => <FlatLoader />)
  .add('with width', () => <FlatLoader width="100px" />)
  .add('with height', () => <FlatLoader height="50px" />)
