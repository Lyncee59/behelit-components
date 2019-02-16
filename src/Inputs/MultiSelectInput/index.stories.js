import React from 'react'
import { storiesOf } from '@storybook/react'
import MultiSelectInput from './index'

const items = [
  { text: 'Item1', value: 1 },
  { text: 'Item2', value: 2 },
  { text: 'Item3', value: 3 },
  { text: 'Item4', value: 4 },
  { text: 'Item5', value: 5 }
]

storiesOf('Inputs/MultiSelectInput', module)
  .add('default', () => <MultiSelectInput items={items} value={[4]} />)
