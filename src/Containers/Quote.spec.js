import React from 'react'
import { mountWithTheme } from '../../utils/testHelper'

import Quote from './Quote'

describe('Quote', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Quote>MyQuote</Quote>)

    expect(tree.find(Quote)).toMatchSnapshot()
  })
})
