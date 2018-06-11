import React from 'react'
import { storiesOf } from '@storybook/react'
import OutlinedButton from './OutlinedButton'

storiesOf('OutlinedButton', module)
  .add('Button', () => <OutlinedButton>My button</OutlinedButton>)
  .add('Button with custom colors', () => <OutlinedButton primaryColor='#0000FF' secondaryColor='#CDCDCD'>My button</OutlinedButton>)
  .add('Button fullwidth', () => <OutlinedButton fullwidth>My button</OutlinedButton>)
  .add('Button with custom width', () => <OutlinedButton width='200px'>My button</OutlinedButton>)
  .add('Button disabled', () => <OutlinedButton disabled>My button</OutlinedButton>)
  .add('Button bold', () => <OutlinedButton bold>My button</OutlinedButton>)
  .add('Button uppercase', () => <OutlinedButton uppercase>My button</OutlinedButton>)
  .add('Button capitalize', () => <OutlinedButton capitalize>My button</OutlinedButton>)


