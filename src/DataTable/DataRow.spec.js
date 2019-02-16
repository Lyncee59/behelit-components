import React from 'react'
import { mountWithTheme } from '../../utils/testHelper'

import DataRow from './DataRow'

describe('DataRow', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<DataRow>MyDataRow</DataRow>)

    expect(tree.find(DataRow)).toMatchSnapshot()
  })

  it('should render correctly with width', () => {
    const tree = mountWithTheme(<DataRow disableHighlight>MyDataRow</DataRow>)

    expect(tree.find(DataRow)).toMatchSnapshot()
  })
})
