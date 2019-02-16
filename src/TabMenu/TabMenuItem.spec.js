import React from 'react'
import { mountWithTheme } from '../../utils/testHelper'

import TabMenuItem from './TabMenuItem'

describe('TabMenuItem', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<TabMenuItem>TabMenuItem</TabMenuItem>)

    expect(tree.find(TabMenuItem)).toMatchSnapshot()
  })

  it('should render correctly with width', () => {
    const tree = mountWithTheme(<TabMenuItem selected>TabMenuItem</TabMenuItem>)

    expect(tree.find(TabMenuItem)).toMatchSnapshot()
  })
})
