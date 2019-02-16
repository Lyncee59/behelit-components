import React from 'react'
import { mountWithTheme } from '../../utils/testHelper'

import TabMenu from './TabMenu'

describe('TabMenu', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<TabMenu>TabMenu</TabMenu>)

    expect(tree.find(TabMenu)).toMatchSnapshot()
  })

  it('should render correctly with width', () => {
    const tree = mountWithTheme(<TabMenu width="300px">TabMenu</TabMenu>)

    expect(tree.find(TabMenu)).toMatchSnapshot()
  })
})
