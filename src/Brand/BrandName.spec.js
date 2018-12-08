import React from 'react'
import { mountWithTheme } from '../../utils/testHelper'

import BrandName from './BrandName'

describe('BrandName', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<BrandName />)

    expect(tree.find(BrandName)).toMatchSnapshot()
  })

  it('should render correctly with size', () => {
    const tree = mountWithTheme(<BrandName size="100px" />)

    expect(tree.find(BrandName)).toMatchSnapshot()
  })
})
