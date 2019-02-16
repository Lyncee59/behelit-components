import React from 'react'
import { storiesOf } from '@storybook/react'
import Quote from './Quote'

storiesOf('Containers/Quote', module)
  .add('default', () => <Quote>This is a quotation !</Quote>)
