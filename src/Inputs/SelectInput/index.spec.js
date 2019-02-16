import React from 'react'
import { mountWithTheme } from '../../../utils/testHelper'

import SelectInput from './index'

const items = [
  { text: 'Item1', value: '1' },
  { text: 'Item2', value: '2' },
  { text: 'Item3', value: '3' },
  { text: 'Item4', value: '4' },
  { text: 'Item5', value: '5' }
]

describe('SelectInput', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<SelectInput items={items} onChange={jest.fn()} value={[4]} />)

    expect(tree.find(SelectInput)).toMatchSnapshot()
  })
})
