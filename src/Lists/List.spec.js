import React from 'react'
import { mountWithTheme } from '../../utils/testHelper'

import List from './List'

describe('List', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<List>List</List>)

    expect(tree.find(List)).toMatchSnapshot()
  })
})
