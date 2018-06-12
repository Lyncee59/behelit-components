import React from 'react'
import { storiesOf } from '@storybook/react'
import FloatingButton from './FloatingButton'

storiesOf('Buttons/FloatingButton', module)
  .add('Button', () => <FloatingButton />)
  .add('Button with icon', () => <FloatingButton name='android' />)
  .add('Button with size', () => <FloatingButton size='medium' />)
  .add('Button with custom colors', () => <FloatingButton color='#0000FF' backgroundColor='#CDCDCD' />)
  .add('Button disabled', () => <FloatingButton disabled />)
