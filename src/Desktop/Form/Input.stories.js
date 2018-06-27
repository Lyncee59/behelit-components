import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from './Input'

storiesOf('Form/Input', module)
  .add('Input', () => <Input />)
  .add('Input with type', () => <Input type='date' />)
  .add('Input with custom colors', () => <Input color='#000099' borderColor='#990000' />)
  .add('Input fullwidth', () => <Input fullwidth={false} />)
  .add('Input with custom width', () => <Input fullwidth={false} width='300px' />)
  .add('Input with custom height', () => <Input height='80px' />)
  .add('Input disabled', () => <Input disabled />)
