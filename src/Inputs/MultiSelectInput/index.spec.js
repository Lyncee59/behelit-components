import React from 'react'
import { mountWithTheme } from '../../../utils/testHelper'

import MultiSelectInput from './index'

const items = [
  { text: 'Item1', value: '1' },
  { text: 'Item2', value: '2' },
  { text: 'Item3', value: '3' },
  { text: 'Item4', value: '4' },
  { text: 'Item5', value: '5' }
]

describe('MultiSelectInput', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<MultiSelectInput items={items} onChange={jest.fn()} value={[4]} />)

    expect(tree.find(MultiSelectInput)).toMatchSnapshot()
  })
})
