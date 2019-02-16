import React from 'react'
import { mountWithTheme } from '../../utils/testHelper'

import DataCell from './DataCell'

describe('DataCell', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<DataCell>MyDataCell</DataCell>)

    expect(tree.find(DataCell)).toMatchSnapshot()
  })

  it('should render correctly with width', () => {
    const tree = mountWithTheme(<DataCell width="50%">MyDataCell</DataCell>)

    expect(tree.find(DataCell)).toMatchSnapshot()
  })
})
