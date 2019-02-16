import React from 'react'
import { storiesOf } from '@storybook/react'
import SelectInput from './index'

const items = [
  { text: 'Item1', value: 1 },
  { text: 'Item2', value: 2 },
  { text: 'Item3', value: 3 },
  { text: 'Item4', value: 4 },
  { text: 'Item5', value: 5 }
]

storiesOf('Inputs/SelectInput', module)
  .add('default', () => <SelectInput items={items} value={4} />)
