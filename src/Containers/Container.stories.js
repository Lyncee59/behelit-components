import React from 'react'
import { storiesOf } from '@storybook/react'
import Container from './Container'

storiesOf('Containers/Container', module).add('default', () => (
  <Container>MyContainer</Container>
))
