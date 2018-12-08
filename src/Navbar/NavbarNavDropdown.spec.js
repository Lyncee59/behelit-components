import React from 'react'
import { mountWithTheme } from '../../utils/testHelper'

import NavbarNavDropdown from './NavbarNavDropdown'

describe('NavbarNavDropdown', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<NavbarNavDropdown />)

    expect(tree.find(NavbarNavDropdown)).toMatchSnapshot()
  })
})
