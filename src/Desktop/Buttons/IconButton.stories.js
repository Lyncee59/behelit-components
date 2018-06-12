import React from 'react'
import { storiesOf } from '@storybook/react'
import IconButton from './IconButton'

storiesOf('Buttons/IconButton', module)
  .add('Button', () => <IconButton>My button</IconButton>)
  .add('Button with icon', () => <IconButton name='android'>My button</IconButton>)
  .add('Button with custom colors', () => <IconButton color='#0000FF' backgroundColor='#CDCDCD'>My button</IconButton>)
  .add('Button fullwidth', () => <IconButton fullwidth>My button</IconButton>)
  .add('Button with custom width', () => <IconButton width='200px'>My button</IconButton>)
  .add('Button disabled', () => <IconButton disabled>My button</IconButton>)
  .add('Button bold', () => <IconButton bold>My button</IconButton>)
  .add('Button uppercase', () => <IconButton uppercase>My button</IconButton>)
  .add('Button capitalize', () => <IconButton capitalize>My button</IconButton>)


