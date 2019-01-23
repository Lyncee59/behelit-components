import React from 'react'
import { mountWithTheme } from '../../utils/testHelper'

import ListItem from './ListItem'

describe('ListItem', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<ListItem>List</ListItem>)

    expect(tree.find(ListItem)).toMatchSnapshot()
  })
})
