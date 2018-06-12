import React from 'react'
import { storiesOf } from '@storybook/react'
import TextButton from './TextButton'

storiesOf('Buttons/TextButton', module)
  .add('Button', () => <TextButton>My button</TextButton>)
  .add('Button with custom colors', () => <TextButton color='#0000FF'>My button</TextButton>)
  .add('Button fullwidth', () => <TextButton fullwidth>My button</TextButton>)
  .add('Button with custom width', () => <TextButton width='200px'>My button</TextButton>)
  .add('Button disabled', () => <TextButton disabled>My button</TextButton>)
  .add('Button bold', () => <TextButton bold>My button</TextButton>)
  .add('Button uppercase', () => <TextButton uppercase>My button</TextButton>)
  .add('Button capitalize', () => <TextButton capitalize>My button</TextButton>)
