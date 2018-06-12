import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import Icon from './Icon'

storiesOf('Icons', module)
  .add('Icon', () => <Icon name='android' />)
  .add('Icon with size', () => <Icon name='android' size='18px' />)
  .add('Icon with weight', () => <Icon name='android' weight={700} />)
  .add('Icon with color', () => <Icon name='android' color='#009900' />)
  .add('Icon with cursor', () => <Icon name='android' cursor />)
  .add('Icon with hover', () => <Icon name='android' hover />)
