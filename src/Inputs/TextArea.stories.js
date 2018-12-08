import React from 'react'
import { storiesOf } from '@storybook/react'
import TextArea from './TextArea'

storiesOf('Inputs/TextArea', module)
  .add('default', () => <TextArea />)
  .add('with disabled', () => <TextArea disabled />)
  .add('with height', () => <TextArea height="200px" />)
  .add('with value', () => <TextArea value="Hello dear friend" />)
  .add('with width', () => <TextArea width="200px" />)
