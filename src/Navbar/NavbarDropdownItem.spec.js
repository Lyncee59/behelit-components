import React from 'react'
import { mountWithTheme } from '../../utils/testHelper'

import NavbarDropdownItem from './NavbarDropdownItem'

describe('NavbarDropdownItem', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<NavbarDropdownItem />)

    expect(tree.find(NavbarDropdownItem)).toMatchSnapshot()
  })
})
