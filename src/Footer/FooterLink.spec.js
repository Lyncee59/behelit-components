import React from 'react'
import { mountWithTheme } from '../../utils/testHelper'

import FooterLink from './FooterLink'

describe('FooterElement', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<FooterLink>FooterLink</FooterLink>)

    expect(tree.find(FooterLink)).toMatchSnapshot()
  })
})
