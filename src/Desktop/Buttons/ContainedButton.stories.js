import React from 'react'
import { storiesOf } from '@storybook/react'
import ContainedButton from './ContainedButton'

storiesOf('ContainedButton', module)
  .add('Button', () => <ContainedButton>My button</ContainedButton>)
  .add('Button with custom colors', () => <ContainedButton primaryColor='#0000FF' secondaryColor='#CDCDCD'>My button</ContainedButton>)
  .add('Button fullwidth', () => <ContainedButton fullwidth>My button</ContainedButton>)
  .add('Button with custom width', () => <ContainedButton width='200px'>My button</ContainedButton>)
  .add('Button disabled', () => <ContainedButton disabled>My button</ContainedButton>)
  .add('Button bold', () => <ContainedButton bold>My button</ContainedButton>)
  .add('Button uppercase', () => <ContainedButton uppercase>My button</ContainedButton>)
  .add('Button capitalize', () => <ContainedButton capitalize>My button</ContainedButton>)
