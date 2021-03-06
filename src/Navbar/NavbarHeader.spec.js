import React from 'react'
import { mountWithTheme } from '../../utils/testHelper'

import NavbarHeader from './NavbarHeader'

describe('NavbarHeader', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<NavbarHeader />)

    expect(tree.find(NavbarHeader)).toMatchSnapshot()
  })
})
